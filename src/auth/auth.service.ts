import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({ username });
    if (user) {
      const payload: JwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        return { accessToken };
      } else {
        throw new UnauthorizedException(
          'Please check your password and try again.',
        );
      }
    } else {
      throw new UnauthorizedException(`User with name ${username} not exist.`);
    }
  }
}
