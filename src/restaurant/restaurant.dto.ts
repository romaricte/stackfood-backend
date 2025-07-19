import { Prisma } from 'generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, IsMongoId } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export const restaurantsArgs = Prisma.validator<Prisma.RestaurantDefaultArgs>()({
    select: {
        restaurantId: true,
        phone: true,
        email: true,
        logo: true,
        image: true,
        status: true,
        longitude: true,
        latitude: true,
        address: true,
        footer_text: true,
        minimum_order: true,
        comission: true,
        schedule_order: true,
        cover_photo: true,
        schedules: true,
        foods: true,
        delivery: true,
        free_delivery: true,
        active: true,
        off_day: true,
        delivery_time: true,
        veg: true,
        cuisine: true,
        createdAt: true,
        updatedAt: true
    }
})
const restaurantArgs = Prisma.validator<Prisma.RestaurantDefaultArgs>()({
    select: {
       ...restaurantsArgs.select,
        schedules: true,
        foods: true,
        cuisine: true
      
    }
})
export type restaurantDto = Prisma.RestaurantGetPayload<typeof restaurantArgs>
export type restaurantsDto = Prisma.RestaurantGetPayload<typeof restaurantsArgs>