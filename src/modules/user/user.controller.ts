import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CurrentUser } from 'modules/auth/decorators/current-user.decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as dotenv from 'dotenv';
import { UserService } from './user.service';
import { VERIFICATION } from 'types/constants/enum';
import { UploadImageDto } from './dto/user.request';
dotenv.config();

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth([ROLE.USER])
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: User,
    @Body() input: UploadImageDto,
  ) {
    const image = `${process.env.SERVER_UPLOAD_ORIGIN}/user/${file.filename}`;
    if (
      input.imageFor === VERIFICATION.LICENSE_FRONT_IMAGE ||
      input.imageFor === VERIFICATION.LICENSE_BACK_IMAGE
    ) {
      await this.userService.updateVerificaionStatusToPending(
        user.id,
        input.imageFor,
        image,
      );
    } else {
      throw new BadRequestException({
        name: 'upload',
        message: 'Upload not successful',
      });
    }
    return true;
  }

  @Get(':imgpath')
  fetchUploadedFile(@Param('imgpath') image: any, @Res() res: any) {
    res.sendFile(image, { root: 'uploads' });
  }
}
