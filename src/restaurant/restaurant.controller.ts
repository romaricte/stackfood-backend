import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateRestaurantDto, RestaurantDto, RestaurantsDto, UpdateRestaurantDto } from "./restaurant.dto";
import { Public } from "../auth/decorators/public.decorator";


@ApiTags('RESTAURANT REST CONTROLLER')
@Controller('restaurant')

export class RestaurantController{
    constructor(private readonly restaurantService: RestaurantService){}
    @Public()
    @Get('allRestaurant')
    async getAllRestaurant(): Promise<RestaurantsDto[]>{
        return await this.restaurantService.findAllRestaurant()
    }
    @Public()
    @Get('restaurantById/:restaurantId')
    async getAllRestaurantByFoodId(@Param('restaurantId') restaurantId: string): Promise<RestaurantsDto[]>{
        return await this.restaurantService.findRestaurantById(restaurantId)
    }
    @Public()
    @Post('createRestaurant')
    async createRestaurant(@Body() dto: CreateRestaurantDto): Promise<RestaurantsDto>{
        return await this.restaurantService.createRestaurant(dto)
    }
    @Public()
    @Put('updateRestaurant/:restaurantId')
    async updateRestaurant(
        @Param('restaurantId') id: string,
        @Body() dto: UpdateRestaurantDto,
    ): Promise<RestaurantDto> {
        return await this.restaurantService.updateRestaurant(id, dto);
    }
    @Public()
    @Delete('deleteRestaurant/:restaurantId')
    async deleteRestaurant(@Param('restaurantId') restaurantId: string): Promise<void> {
        return await this.restaurantService.deleteRestaurant(restaurantId);
    }

}