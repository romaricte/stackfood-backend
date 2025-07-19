import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCuisineDto, CuisineDto, UpdateCuisineDto } from "./cuisine.dto";

@Injectable()

export class CuisineService {
    constructor(private prisma: PrismaService) { }

    async findAllCuisine(): Promise<CuisineDto[]> {
        return await this.prisma.cuisine.findMany();
    }
    async findAllCuisineByFoodId(foodId: string): Promise<CuisineDto[]> {
        return await this.prisma.cuisine.findMany({
            where: {
                foodId,
            },
        });
    }
    async createCuisine(cuisineDto: CreateCuisineDto): Promise<CuisineDto> {
        return await this.prisma.cuisine.create({ data: cuisineDto });
    }

    async updateCuisine(cuisineId: string, dto: UpdateCuisineDto): Promise<CuisineDto> {
        return this.prisma.cuisine.update({
            where: { cuisineId },
            data: dto,
        });
    }
    async deleteCuisine(cuisineId: string): Promise<void> {
        try {
            await this.prisma.cuisine.delete({
                where: { cuisineId },
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException(`Cuisine avec ID ${cuisineId} introuvable.`);
            }
            throw error;
        }
        return;
    }
}
