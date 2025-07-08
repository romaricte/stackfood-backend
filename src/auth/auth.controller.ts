import { Controller, Post, Body, Get, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenResponse } from './interfaces/token-response.interface';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from 'generated/prisma/client';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion utilisateur' })
  @ApiResponse({ 
    status: 200, 
    description: 'Connexion réussie', 
    type: TokenResponse 
  })
  @ApiResponse({ status: 401, description: 'Identifiants invalides' })
  async login(@Body() loginDto: LoginDto): Promise<TokenResponse> {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Inscription utilisateur' })
  @ApiResponse({ 
    status: 201, 
    description: 'Utilisateur créé avec succès', 
    type: TokenResponse 
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  async register(@Body() registerDto: RegisterDto): Promise<TokenResponse> {
    return this.authService.register(registerDto);
  }

  @Get('profile')
  // @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtenir le profil de l\'utilisateur connecté' })
  @ApiResponse({ 
    status: 200, 
    description: 'Profil récupéré avec succès'
  })
  @ApiResponse({ status: 401, description: 'Non autorisé' })
  getProfile(@CurrentUser() user) {
    return user;
  }

  @Public()
  @Get('users')
  @ApiOperation({ summary: 'Obtenir tous les utilisateurs' })
  @ApiResponse({ 
    status: 200, 
    description: 'Tous les utilisateurs récupérés avec succès'
  })
  async getAllUsers(): Promise<User[]> {
    return this.authService.getAllUsers();
  }
}
