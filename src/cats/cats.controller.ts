import {
  Body,
  Controller,
  Get,
  HostParam,
  HttpCode,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { CreateCatDTO } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { ICat } from './interface/cats.interface';

@Controller({ path: 'cats', host: ':sub.devel.kakao.com' })
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @HttpCode(201)
  async findAll(): Promise<ICat[]> {
    return this.catsService.findAll();
  }

  @Get('redirect')
  @Redirect('/users')
  redirectTest(@Query('version') version) {
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
  async create(@Body() cat: CreateCatDTO) {
    this.catsService.create({ age: 10, name: 'hello' });
  }
}
