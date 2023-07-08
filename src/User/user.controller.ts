import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signUp(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Post('login')
  async login(@Body() user: User): Promise<User> {
    const foundUser = await this.userService.findUserByEmail(user.email);
    if (!foundUser || foundUser.password !== user.password) {
      throw new Error('Invalid credentials');
    }
    return foundUser;
  }
}
