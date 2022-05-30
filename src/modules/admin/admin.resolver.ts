import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { AdminService } from './admin.service';
import { RegisterAdminInput } from './dto/admin.request';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => Boolean)
  async getDashboardData() {
    return await this.adminService.getDashboardData();
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createNewAdmin(@Args('input') input: RegisterAdminInput) {
    return await this.adminService.createNewAdmin(input);
  }

  @Query(() => Boolean)
  async confirmAdminToken(@Args('token') token: string) {
    return await this.adminService.confirmAdminToken(token);
  }

  @Mutation(() => Boolean)
  async resetNewAdminPassword(
    @Args('password') password: string,
    @Args('token') token: string,
  ) {
    return await this.adminService.resetNewAdminPassword(password, token);
  }
}
