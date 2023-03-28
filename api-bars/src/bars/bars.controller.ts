import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { BarsService } from './bars.service';
import { CreateBarDto } from './dto/create.bar.dto';
import { Bar } from './entities/bar.entity';

@ApiBearerAuth()
@ApiTags('bars')
@Controller('api')
export class BarsController {
    constructor(private readonly barsService: BarsService) {}

  @Post()
  @ApiOperation({ summary: 'Create bar' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createBarDto: CreateBarDto): Promise<Bar> {
        return this.barsService.create(createBarDto);
    }

  @Get(':id')
  @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Bar,
  })
  findOne(@Param('id') id: string): Bar {
      return this.barsService.findOne(+id);
  }

  @Get('bars')
  @ApiResponse({
      status: 200,
      description: 'The found all record',
      type: Bar,
  })
  findAll(): Bar[] {
      return this.barsService.findAll();
  }
}
