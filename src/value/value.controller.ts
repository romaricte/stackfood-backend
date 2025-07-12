import { Body, Controller, Post } from "@nestjs/common";
import { ValueService } from "./value.service";
import { Public } from "../auth/decorators/public.decorator";
import { Get } from "@nestjs/common";
import { Value } from "generated/prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { ValueDto } from "./dto/value.dto";

@ApiTags('Values')
@Controller('values')
export class ValueController {
    constructor(private readonly valueService: ValueService) {}
    @Public()
    @Get()
    async getAllValues(): Promise<Value[]> {
        return await this.valueService.findAllValue();
    }
    @Public()
    @Post()
    async createValue(@Body() valueDto: ValueDto): Promise<Value> {
        return await this.valueService.createValue(valueDto);
    }   
}
