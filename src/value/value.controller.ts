import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { ValueService } from "./value.service";
import { Public } from "../auth/decorators/public.decorator";
import { Get } from "@nestjs/common";
import { Value, Variant } from "generated/prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { CreateValueDto, CreateVariantDto, UpdateValueDto, UpdateVariantDto } from "./dto/value.dto";

@ApiTags('VALUES REST CONTROLLER')
@Controller('values')
export class ValueController {
    constructor(private readonly valueService: ValueService) { }
    @Public()
    @Get('allValues')
    async getAllValues(): Promise<Value[]> {
        return await this.valueService.findAllValue();
    }
    @Public()
    @Get('allValuesByVariantId/:variantId')
    async getAllValuesByVariantId(@Param('variantId') variantId: string): Promise<Value[]> {
        return await this.valueService.findAllValueByVariantId(variantId);
    }
    @Public()
    @Get('allVariants')
    async getAllVariants(): Promise<Variant[]> {
        return await this.valueService.findAllVariant();
    }
    @Public()
    @Post('createValue')
    async createValue(@Body() valueDto: CreateValueDto): Promise<Value> {
        return await this.valueService.createValue(valueDto);
    }
    @Public()
    @Post('createVariant')
    async createVariant(@Body() variantDto: CreateVariantDto): Promise<Variant> {
        return await this.valueService.createVariant(variantDto);
    }
    @Public()
    @Put('updateVariant/:variantId')
    async updateVariant(
        @Param('variantId') id: string,
        @Body() dto: UpdateVariantDto,
    ): Promise<Variant> {
        return this.valueService.updateVariant(id, dto);
    }
    @Public()
    @Put('updateValue/:valueId')
    async updateValue(
        @Param('valueId') id: string,
        @Body() dto: UpdateValueDto,
    ): Promise<Value> {
        return this.valueService.updateValue(id, dto);
    }
    @Public()
    @Delete('deleteValue/:valueId')
    async deleteValue(@Param('valueId') valueId: string): Promise<void> {
        return this.valueService.deleteValue(valueId);
    }
    @Public()
    @Delete('deleteVariant/:variantId')
    async deleteVariant(@Param('variantId') variantId: string): Promise<void> {
        return this.valueService.deleteVariant(variantId);
    }
}
