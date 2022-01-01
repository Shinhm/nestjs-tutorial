import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatsModule, DogsModule],
})
export class AppModule {}
