import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller({ host: 'localhost' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    console.log(req.hostname);
    return this.appService.getHello();
  }

  @Get('redirect/docs')
  @Redirect('https://google.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
