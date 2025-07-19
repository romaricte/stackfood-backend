import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ValueModule } from './value/value.module';
import { CuisineModule } from './cuisine/cuisine.module';
import { foodModule } from './food/food.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [AuthModule, 
            PrismaModule, 
            CategoriesModule, 
            ValueModule, 
            CuisineModule,
            foodModule,
            RestaurantModule
          
          
          ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
