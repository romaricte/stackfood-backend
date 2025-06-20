import { ApiProperty } from '@nestjs/swagger';
import { User } from 'generated/prisma';

export class TokenResponse {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'Token JWT d\'authentification'
  })
  access_token: string;

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'Token JWT d\'authentification'
  })
  user: User;
} 
