import { Controller, Post, Body, Req, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }
  
  
  // @Post('login')
  // login(@Req() req, @Body() loginUserDto: LoginUserDto) {
  //   return new Promise(async (resolve, reject) => {
  //     const result = await this.usersService.login(loginUserDto);
  //     if (!result || !result.user) {
  //       reject(new UnauthorizedException('Invalid credentials'));
  //       return;
  //     }
  //     const { user } = result;

  //     req.session.regenerate((err) => {
  //       if (err) {
  //         console.error('Session regeneration error:', err);
  //         reject(new InternalServerErrorException());
  //       } else {
  //         req.session.user = {
  //           id: user.id,
  //           email: user.email,
  //         };
  //         resolve({
  //           message: 'Login success',
  //           user: {
  //             id: user.id,
  //             email: user.email,
  //           },
  //         });
  //       }
  //     });
  //   });
  // }
}