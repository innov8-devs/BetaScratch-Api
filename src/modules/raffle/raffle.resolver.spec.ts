import { Test, TestingModule } from '@nestjs/testing';
import { RaffleResolver } from './raffle.resolver';
import { RaffleService } from './raffle.service';

describe('RaffleResolver', () => {
  let resolver: RaffleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaffleResolver, RaffleService],
    }).compile();

    resolver = module.get<RaffleResolver>(RaffleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
