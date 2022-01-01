import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { CatsModule } from '../cats/cats.module';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [CatsModule],
})
export class DogsModule {}
