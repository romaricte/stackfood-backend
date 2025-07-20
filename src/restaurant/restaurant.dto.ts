import { Prisma } from 'generated/prisma/client';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';


export const restaurantsArgs = Prisma.validator<Prisma.RestaurantDefaultArgs>()({
    select: {
        restaurantId: true,
        phone: true,
        email: true,
        logo: true,
        image: true,
        longitude: true,
        latitude: true,
        address: true,
        footer_text: true,
        minimum_order: true,
        comission: true,
        schedule_order: true,
        cover_photo: true,
        delivery: true,
        free_delivery: true,
        active: true,
        off_day: true,
        delivery_time: true,
        createdAt: true,
        updatedAt: true
    }
})
export const restaurantArgs = Prisma.validator<Prisma.RestaurantDefaultArgs>()({
    select: {
       ...restaurantsArgs.select,
        schedules: true,
        foods: true,
        cuisine: true
      
    }
})
export type RestaurantDto = Prisma.RestaurantGetPayload<typeof restaurantArgs>
export type RestaurantsDto = Prisma.RestaurantGetPayload<typeof restaurantsArgs>

export class CreateRestaurantDto {
    // @ApiProperty() @IsMongoId() @IsOptional() restaurantId: string;
    @ApiProperty() @IsString() name: string;
    @ApiProperty() @IsString() image: string;
    @ApiProperty() @IsBoolean() delivery: boolean;
    @ApiProperty() @IsBoolean() free_delivery: boolean;
    @ApiProperty() @IsString() phone: string;
    @ApiProperty() @IsString() email: string;
    @ApiProperty() @IsString() logo: string;
    @ApiProperty() @IsString() address: string;
    @ApiProperty() @IsString() footer_text: string;
    @ApiProperty() @IsNumber() minimum_order: number;
    @ApiProperty() @IsNumber() comission: number;
    @ApiProperty() @IsBoolean() schedule_order: boolean;
    @ApiProperty() @IsString() cover_photo: string;
    @ApiProperty() @IsString() delivery_time: string;
    @ApiProperty() @IsString() off_day: string;
    @ApiProperty() @IsBoolean() active: boolean;
    @ApiProperty() @IsString() longitude: string;
    @ApiProperty() @IsString() latitude: string;

  }

  export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
      }    