import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const findOptions: FindOneOptions<User> = { where: { email } };
    return this.userRepository.findOne(findOptions);
  }
}
