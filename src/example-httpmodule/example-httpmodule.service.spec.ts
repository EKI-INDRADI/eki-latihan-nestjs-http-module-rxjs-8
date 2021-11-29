import { Test, TestingModule } from '@nestjs/testing';
import { ExampleHttpmoduleService } from './example-httpmodule.service';

describe('ExampleHttpmoduleService', () => {
  let service: ExampleHttpmoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleHttpmoduleService],
    }).compile();

    service = module.get<ExampleHttpmoduleService>(ExampleHttpmoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
