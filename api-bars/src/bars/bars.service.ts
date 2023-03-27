import { Injectable } from '@nestjs/common';
import { CreateBarDto } from './dto/create.bar.dto';
import { Bar } from './entities/bar.entity';

@Injectable()
export class BarsService {
  private readonly bars: Bar[] = [];

  create(bar: CreateBarDto): Bar {
    this.bars.push(bar);
    return bar;
  }

  findOne(id: number): Bar {
    return this.bars[id];
  }

  findAll() {
    return [];
  }
}
