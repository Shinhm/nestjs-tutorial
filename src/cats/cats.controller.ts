import {
  Body,
  Controller,
  Get,
  HostParam,
  HttpCode,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDTO } from './cats.dto';

@Controller({ path: 'cats', host: ':sub.devel.kakao.com' })
export class CatsController {
  @Get()
  @HttpCode(201)
  findAll(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.send(request.headers);
  }

  @Get('redirect')
  @Redirect('/users')
  redirectTest(@Query('version') version) {
    console.log(version);
    if (version === 'cats') {
      return { url: '/cats' };
    }
  }

  @Get('sub-domain')
  @HttpCode(200)
  subDomainTest(@HostParam('sub') sub, @Res() res) {
    res.json({ subDomain: sub });
  }

  @Post()
  async create(@Body() cats: CreateCatDTO) {
    return 'make cats';
  }
}
