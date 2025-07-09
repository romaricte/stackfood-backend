import { Controller, Get, Post, Body, Put, Delete, Param, Logger } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CategoriesService } from "./categories.service";
import { CategoryDto } from "./dto/category.dto";
import { Category } from "generated/prisma/client";
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Public()
  @Get()
  async getAllCategories(): Promise<Category[]> {
    return await this.categoriesService.findAll();
  }
  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID de la catégorie' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }
  @Public()
  @Post()
  async createCategory(@Body() categoryDto: CategoryDto): Promise<Category> {
    return await this.categoriesService.create(categoryDto);
  }

  @Public()
  @Put()
  async updateCategory(@Body() categoryDto: CategoryDto): Promise<Category> {
    return await this.categoriesService.update(categoryDto);
  }

  @Public()
  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<{ message: string }> {
    await this.categoriesService.remove(id);
    return { message: 'Catégorie supprimée avec succès.' };
  }
}
