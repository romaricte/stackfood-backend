import { Body, Get, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { CuisineService } from "./cuisine.service";
import { Public } from "../auth/decorators/public.decorator";
import { ApiTags } from "@nestjs/swagger";
import { CreateCuisineDto, CuisineDto, UpdateCuisineDto } from "./cuisine.dto";
@ApiTags('CUISINE REST CONTROLLER')
@Controller('cuisine')
export class CuisineController {
    constructor(private readonly cuisineService: CuisineService) { }
    @Public()
    @Get('allCuisine')
    async getAllCuisine(): Promise<CuisineDto[]> {
        return await this.cuisineService.findAllCuisine();
    }
    @Public()
    @Get('allCuisineByFoodId/:foodId')
    async getAllCuisineByFoodId(@Param('foodId') foodId: string): Promise<CuisineDto[]> {
        return await this.cuisineService.findAllCuisineByFoodId(foodId);
    }
    @Public()
    @Post('createCuisine')
    async createCuisine(@Body() cuisineDto: CreateCuisineDto): Promise<CuisineDto> {
        return await this.cuisineService.createCuisine(cuisineDto);
    }
    @Public()
    @Put('updateCuisine/:cuisineId')
    async updateCuisine(
        @Param('cuisineId') id: string,
        @Body() dto: UpdateCuisineDto,
    ): Promise<CuisineDto> {
        return this.cuisineService.updateCuisine(id, dto);
    }
    @Public()
    @Delete('deleteCuisine/:cuisineId')
    async deleteCuisine(@Param('cuisineId') cuisineId: string): Promise<void> {
        return this.cuisineService.deleteCuisine(cuisineId);
    }
}
