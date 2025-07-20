import { Injectable } from "@nestjs/common";
import { promises } from "dns";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRestaurantDto,
    UpdateRestaurantDto,
     restaurantArgs,
     RestaurantDto,
     restaurantsArgs, RestaurantsDto } from "./restaurant.dto";


@Injectable()

export class RestaurantService{
    constructor(private prisma: PrismaService){}

    async findAllRestaurant(): Promise<RestaurantsDto[]> {
        return await this.prisma.restaurant.findMany(restaurantsArgs)
    }

    async findRestaurantById(id: string): Promise<RestaurantDto[]> {
        return await this.prisma.restaurant.findMany({
            where: {
                restaurantId: id
            },
            ...restaurantArgs
        })
    }

    async createRestaurant(restaurantDto: CreateRestaurantDto): Promise<RestaurantsDto> {
        return await this.prisma.restaurant.create({ data: restaurantDto, ...restaurantsArgs })
    }

    async updateRestaurant(id: string, dto: UpdateRestaurantDto): Promise<RestaurantDto> {
        return await this.prisma.restaurant.update(
            { 
                ...restaurantArgs,
                where: { restaurantId: id }, 
                data: dto, 
            })
    }

    async deleteRestaurant(id: string): Promise<void> {
        await this.prisma.restaurant.delete({ where: { restaurantId: id } })
    }
}