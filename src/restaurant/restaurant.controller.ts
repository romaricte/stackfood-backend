import { Controller, Get } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { ApiTags } from "@nestjs/swagger";
import { restaurantsDto } from "./restaurant.dto";
import { Public } from "../auth/decorators/public.decorator";


@ApiTags('RESTAURANT REST CONTROLLER')
@Controller('restaurant')

export class RestaurantController{
    constructor(private readonly restaurantService: RestaurantService){}
    @Public()
    @Get('allRestaurant')
    async getAllRestaurant(): Promise<restaurantsDto[]>{
        return await this.restaurantService.findAllRestaurant()
    }


}