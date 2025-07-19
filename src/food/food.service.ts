import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFoodDto, FoodDto, FoodsDto, UpdateFoodDto, foodArgs, foodsArgs } from "./food.dto";

@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) { }

    async findAllFood(): Promise<FoodsDto[]> {
        return await this.prisma.food.findMany(foodsArgs);
    }
    async findOneFood(id: string): Promise<FoodDto> {
        const food = await this.prisma.food.findUnique({
            ...foodArgs,
            where: { id },
        });

        if (!food) {
            throw new NotFoundException(`Food with id ${id} not found`);
        }

        return food;
    }
    async findAllFoodByRestaurantId(restaurantId: string): Promise<FoodsDto[]> {
        return await this.prisma.food.findMany({
            ...foodsArgs,
            where: {
                restaurantId,
            },
        });
    }
    async createFood(foodDto: CreateFoodDto): Promise<FoodDto> {
        return await this.prisma.food.create({
            data: foodDto,
            ...foodArgs,
        });
    }

    async updateFood(id: string, foodDto: UpdateFoodDto): Promise<FoodDto> {
        return await this.prisma.food.update({
            ...foodArgs,
            where: { id },
            data: foodDto
        });
    }

    async deleteFood(id: string): Promise<void> {
        await this.prisma.food.delete({
            where: { id }
        });
    }
}