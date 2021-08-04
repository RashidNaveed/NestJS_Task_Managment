import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() autCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(autCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() autCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(autCredentialsDto);
  }
}
