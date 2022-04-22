import { Test, TestingModule } from '@nestjs/testing';
import { TesstService } from './tesst.service';

describe('TesstService', () => {
  let service: TesstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TesstService],
    }).compile();

    service = module.get<TesstService>(TesstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
