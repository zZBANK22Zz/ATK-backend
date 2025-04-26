import {
  Controller,
  Get,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        req.session.user = {
            id: req.user.id,
            email: req.user.email
        };

        return { message: 'Loged in successfully', user: {
            id: req.user.id,
            username: req.user.username,
        } };
    }

    @Get('')
    async getAuthSession(@Session() session: Record<string, any>) {
        console.log(session);
        console.log(session.id);
    }
}
