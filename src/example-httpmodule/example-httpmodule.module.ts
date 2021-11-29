import { Module } from '@nestjs/common';
import { ExampleHttpmoduleService } from './example-httpmodule.service';
import { ExampleHttpmoduleController } from './example-httpmodule.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [ExampleHttpmoduleController],
  providers: [ExampleHttpmoduleService]
})
export class ExampleHttpmoduleModule {}
