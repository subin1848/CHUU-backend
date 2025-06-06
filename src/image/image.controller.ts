// image.controller.ts
import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ImageService } from './image.service';

@Controller('upload')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  async printImage(@Body('file') base64: string, @Res() res: Response) {
    const html = await this.imageService.getPrintableHtmlFromBase64(base64);
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  }
}
