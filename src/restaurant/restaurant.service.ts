import { Injectable } from "@nestjs/common";
import { promises } from "dns";
import { PrismaService } from "src/prisma/prisma.service";
import { restaurantsArgs, restaurantsDto } from "./restaurant.dto";


@Injectable()

export class RestaurantService{
    constructor(private prisma: PrismaService){}

    async findAllRestaurant(): Promise<restaurantsDto[]> {
        return await this.prisma.restaurant.findMany(restaurantsArgs)
    }


}