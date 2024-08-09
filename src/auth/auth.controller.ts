import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { RefreshTokenDto } from './dtos/refresh-tokens.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() registerData: RegisterDto){
    return this.authService.register(registerData)
  }

  @Post('login')
  async login(@Body() credentials: LoginDto){
    return this.authService.login(credentials)
  }

  @Post('refresh')
  async refeshTokens(@Body() refreshTokenDto: RefreshTokenDto){
    return this.authService.refreshTokens(refreshTokenDto.refreshToken)
  }


}
