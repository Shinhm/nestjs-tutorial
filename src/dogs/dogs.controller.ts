import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { CatsService } from '../cats/cats.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly dogsService: DogsService,
    private catsService: CatsService,
  ) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    console.log('come');
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
