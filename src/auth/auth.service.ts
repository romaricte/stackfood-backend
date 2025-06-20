import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenResponse } from './interfaces/token-response.interface';
import { PrismaService } from '../prisma/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async login(loginDto: LoginDto): Promise<TokenResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email }
    });

    if (!user || !this.verifyPassword(loginDto.password, user.password)) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload = { email: user.email, sub: user.id };
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<TokenResponse> {
    // Vérifier si l'email existe déjà
    const existingUserEmail = await this.prisma.user.findUnique({
      where: { email: registerDto.email }
    });
    
    if (existingUserEmail) {
      throw new ConflictException('Cet email est déjà utilisé');
    }

    // Vérifier si le téléphone existe déjà
    const existingUserPhone = await this.prisma.user.findUnique({
      where: { phone: registerDto.phone }
    });
    
    if (existingUserPhone) {
      throw new ConflictException('Ce numéro de téléphone est déjà utilisé');
    }

    // Hacher le mot de passe
    const hashedPassword = this.hashPassword(registerDto.password);

    // Créer l'utilisateur dans la base de données
    const newUser = await this.prisma.user.create({
      data: {
        name: registerDto.name,
        email: registerDto.email,
        phone: registerDto.phone,
        password: hashedPassword,
      }
    });

    // Générer un token JWT
    const payload = { email: newUser.email, sub: newUser.id };
    return {
      user: newUser,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    });

    if (user && this.verifyPassword(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    
    return null;
  }

  // Méthode pour hacher le mot de passe
  private hashPassword(password: string): string {
    // Génération d'un sel aléatoire unique pour chaque utilisateur
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
    // Retourne le sel et le mot de passe haché concaténés
    return `${salt}:${hashedPassword}`;
  }

  // Méthode pour vérifier le mot de passe
  private verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    const [salt, key] = hashedPassword.split(':');
    const hashedPlainPassword = crypto.scryptSync(plainPassword, salt, 64).toString('hex');
    return hashedPlainPassword === key;
  }
}
