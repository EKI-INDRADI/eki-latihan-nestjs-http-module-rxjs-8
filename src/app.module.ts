import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleHttpmoduleModule } from './example-httpmodule/example-httpmodule.module';

@Module({
  imports: [
    ExampleHttpmoduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
