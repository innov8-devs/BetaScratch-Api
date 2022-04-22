import { Test, TestingModule } from '@nestjs/testing';
import { TesstController } from './tesst.controller';
import { TesstService } from './tesst.service';

describe('TesstController', () => {
  let controller: TesstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TesstController],
      providers: [TesstService],
    }).compile();

    controller = module.get<TesstController>(TesstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
