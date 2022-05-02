import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Header,
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
import { Context } from '@nestjs/graphql';
import { MyContext } from 'types/constants/types';
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
    @Context() { res }: MyContext,
    @Body() input: UploadImageDto,
  ) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const image = `${process.env.SERVER_UPLOAD_ORIGIN}/${file.filename}`;
    if (input.imageFor === VERIFICATION.LICENSE_FRONT_IMAGE) {
      await this.userService.updateVerificaionStatusToPending(
        user.id,
        image,
        null,
      );
    } else if (
      input.imageFor === VERIFICATION.LICENSE_BACK_IMAGE &&
      user.licenseFrontImage
    ) {
      await this.userService.updateVerificaionStatusToPending(
        user.id,
        user.licenseFrontImage,
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
