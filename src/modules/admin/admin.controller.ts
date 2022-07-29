import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { UploadBannerImageDto } from 'modules/user/dto/user.request';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { IMAGE_TYPE } from 'types/constants/enum';
import { AdminService } from './admin.service';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Auth([ROLE.ADMIN])
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
    @Body() input: UploadBannerImageDto,
  ) {
    if (input.imageFor !== IMAGE_TYPE.BANNER) {
      throw new BadRequestException({
        name: 'upload',
        message: 'Upload not successful',
      });
    }
    const image = `${process.env.SERVER_UPLOAD_ORIGIN}/banner/${file.filename}`;
    input.imageUrl = image;
    return await this.adminService.saveBannerImage(input);
  }
}
