import { Test, TestingModule } from '@nestjs/testing';
import { ExampleHttpmoduleController } from './example-httpmodule.controller';
import { ExampleHttpmoduleService } from './example-httpmodule.service';

describe('ExampleHttpmoduleController', () => {
  let controller: ExampleHttpmoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleHttpmoduleController],
      providers: [ExampleHttpmoduleService],
    }).compile();

    controller = module.get<ExampleHttpmoduleController>(ExampleHttpmoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
