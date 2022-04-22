import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TesstService } from './tesst.service';
// import { CreateTesstDto } from './dto/create-tesst.dto';
// import { UpdateTesstDto } from './dto/update-tesst.dto';

@Controller('tesst')
export class TesstController {
  constructor(private readonly tesstService: TesstService) {}

  // @Post()
  // create(@Body() createTesstDto: CreateTesstDto) {
  //   return this.tesstService.create(createTesstDto);
  // }

  @Get()
  findAll() {
    return this.tesstService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tesstService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTesstDto: UpdateTesstDto) {
  //   return this.tesstService.update(+id, updateTesstDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tesstService.remove(+id);
  }
}
