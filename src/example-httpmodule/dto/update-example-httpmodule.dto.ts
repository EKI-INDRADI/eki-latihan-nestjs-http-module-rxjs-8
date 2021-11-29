import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleHttpmoduleDto } from './create-example-httpmodule.dto';

export class UpdateExampleHttpmoduleDto extends PartialType(CreateExampleHttpmoduleDto) {}
