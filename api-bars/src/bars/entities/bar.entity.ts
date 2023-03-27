import { ApiProperty } from '@nestjs/swagger';

export class Bar {
  /**
   * The name of the Bar
   * @example "Chez nous"
   */
  @ApiProperty({ example: 1, description: 'The name of the bar' })
  name: string;
}
