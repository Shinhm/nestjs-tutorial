import { Injectable } from '@nestjs/common';
import { ICat } from './interface/cats.interface';

@Injectable()
export class CatsService {
  private cats: ICat[] = [];

  create(data: ICat) {
    this.cats.push(data);
  }

  findAll(): ICat[] {
    return this.cats;
  }
}
