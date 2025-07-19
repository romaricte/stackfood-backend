import { Body, Get, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FoodService } from "./food.service";
import { Public } from "../auth/decorators/public.decorator";
import { CreateFoodDto, FoodDto, FoodsDto, UpdateFoodDto } from "./food.dto";


@ApiTags('FOOD REST CONTROLLER')
@Controller('food')
export class FoodController {
    constructor(private readonly foodService: FoodService) {}

    @Public()
    @Get('all')
    async getAllFood(): Promise<FoodsDto[]> {
        return await this.foodService.findAllFood();
    }

    @Public()
    @Get(':foodId')
    async getOneFood(@Param('foodId') foodId: string): Promise<FoodDto> {
        return await this.foodService.findOneFood(foodId);
    }

    @Public()
    @Get('restaurant/:restaurantId')
    async getFoodsByRestaurant(@Param('restaurantId') restaurantId: string): Promise<FoodsDto[]> {
        return await this.foodService.findAllFoodByRestaurantId(restaurantId);
    }

    @Public()
    @Post()
    async createFood(@Body() foodDto: CreateFoodDto): Promise<FoodDto> {
        return await this.foodService.createFood(foodDto);
    }

    @Public()
    @Put(':foodId')
    async updateFood(
        @Param('foodId') foodId: string,
        @Body() foodDto: UpdateFoodDto
    ): Promise<FoodDto> {
        return await this.foodService.updateFood(foodId, foodDto);
    }

    @Public()
    @Delete(':foodId')
    async deleteFood(@Param('foodId') foodId: string): Promise<void> {
        return await this.foodService.deleteFood(foodId);
    }
}