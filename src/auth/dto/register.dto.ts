import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Jean Dupont', description: 'Nom complet de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  name: string;

  @ApiProperty({ example: 'utilisateur@example.com', description: 'Email de l\'utilisateur' })
  @IsEmail({}, { message: 'Format d\'email invalide' })
  @IsNotEmpty({ message: 'L\'email est obligatoire' })
  email: string;

  @ApiProperty({ example: '0612345678', description: 'Numéro de téléphone de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le numéro de téléphone est obligatoire' })
  phone: string;

  @ApiProperty({ example: 'motdepasse123', description: 'Mot de passe de l\'utilisateur' })
  @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;
} 