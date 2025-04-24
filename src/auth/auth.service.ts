import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'; // ✅ update path as needed
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {} // ✅ Inject it here


  async validateUser(username: string, password: string): Promise<any> {
    console.log('Validating user', username);
    const user = await this.usersService.findByUsername(username); // or email
  
    console.log('🔍 Found user:', user);
  
    if (user && await bcrypt.compare(password, user.password)) {
      console.log('Password match!');
      return user;
    }
  
    console.log('Invalid credentials');
    return null;
  }
}