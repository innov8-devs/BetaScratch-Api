import { Injectable } from '@nestjs/common';
// import { CreateTesstDto } from './dto/create-tesst.dto';
// import { UpdateTesstDto } from './dto/update-tesst.dto';

@Injectable()
export class TesstService {
  // create(createTesstDto: CreateTesstDto) {
  //   return 'This action adds a new tesst';
  // }

  findAll() {
    return `This action returns all tesst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tesst`;
  }

  // update(id: number, updateTesstDto: UpdateTesstDto) {
  //   return `This action updates a #${id} tesst`;
  // }

  remove(id: number) {
    return `This action removes a #${id} tesst`;
  }
}
