import { PartialType } from '@nestjs/mapped-types';
import { CreateTesstDto } from './create-tesst.dto';

export class UpdateTesstDto extends PartialType(CreateTesstDto) {}
