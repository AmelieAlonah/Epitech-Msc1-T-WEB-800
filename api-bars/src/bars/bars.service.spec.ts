import { Test, TestingModule } from '@nestjs/testing';
import { BarsController } from "./bars.controller";
import { BarsService } from "./bars.service";

describe('BarController Test U', () => {
  let barsController: BarsController;
  let barsService: BarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarsController],
      providers: [BarsService],
    }).compile();

    barsController = module.get<BarsController>(BarsController);
  });

  describe('barsControllers TestU Find One', () => {
    it('should return "Hello bars!"', () => {
      console.log('lala')
    });
  });
});
