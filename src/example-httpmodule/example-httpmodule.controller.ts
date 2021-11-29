import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExampleHttpmoduleService } from './example-httpmodule.service';
import { CreateExampleHttpmoduleDto } from './dto/create-example-httpmodule.dto';
import { UpdateExampleHttpmoduleDto } from './dto/update-example-httpmodule.dto';

@Controller('example-httpmodule')
export class ExampleHttpmoduleController {
  constructor(private readonly exampleHttpmoduleService: ExampleHttpmoduleService) {}

  @Post()
  create(@Body() createExampleHttpmoduleDto: CreateExampleHttpmoduleDto) {
    return this.exampleHttpmoduleService.create(createExampleHttpmoduleDto);
  }

  @Get()
  findAll() {
    return this.exampleHttpmoduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleHttpmoduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExampleHttpmoduleDto: UpdateExampleHttpmoduleDto) {
    return this.exampleHttpmoduleService.update(+id, updateExampleHttpmoduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleHttpmoduleService.remove(+id);
  }



  @Post('/axios')
  AxiosCreate(@Body() createExampleHttpmoduleDto: any) {
    return this.exampleHttpmoduleService.postRequestHttpModule(createExampleHttpmoduleDto)
  }

  @Post('/axios-async')
  AsyncAxiosCreate(@Body() createExampleHttpmoduleDto: any) {
    return this.exampleHttpmoduleService.asyncPostRequestHttpModule(createExampleHttpmoduleDto)
  }


}
