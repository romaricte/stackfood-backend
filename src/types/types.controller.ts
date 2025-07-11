import { ApiParam, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";
import { Type } from "generated/prisma";
import { TypesService } from "./types.service";
import { Public } from '../auth/decorators/public.decorator';


@ApiTags('Types')
@Controller('types')
export class TypesController {
    constructor(private readonly typesService: TypesService) {}
    @Public()
    @Get()
    async getAllTypes(): Promise<Type[]> {
        return await this.typesService.findAll();
    }
    // @Public()
    // @Get(':id')
    // @ApiParam({ name: 'id', description: 'ID du type' })
    // findOne(@Param('id') id: string) {
    //     return this.typesService.findOne(id);
    // }
    // @Public()
    // @Post()
    // async createType(@Body() typeDto: TypeDto): Promise<Type> {
    //     return await this.typesService.create(typeDto);
    // }
    // @Public()
    // @Put(':id')
    // async updateType(@Body() typeDto: TypeDto): Promise<Type> {
    //     return await this.typesService.update(typeDto);
    // }
    // @Public()
    // @Delete(':id')
    // async deleteType(@Param('id') id: string): Promise<{ message: string }> {
    //     await this.typesService.remove(id);
    //     return { message: 'Type supprimé avec succès.' };
    // }
}