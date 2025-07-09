import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Category } from "generated/prisma/client";
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }
  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException(`Catégorie ${id} non trouvée`);
    return category;
  }
  async create(categoryDto: CategoryDto): Promise<Category> {
    return this.prisma.category.create({ data: {
      name: categoryDto.name,
      image: categoryDto.image,
      status: categoryDto.status,
    } });
  }
  async update(categoryDto: CategoryDto): Promise<Category> {
    return this.prisma.category.update({ where: { id: categoryDto.id }, data: {
      name: categoryDto.name,
      image: categoryDto.image,
      status: categoryDto.status,
    } });
  }
  async remove(id: string): Promise<void> {
    try {
      await this.prisma.category.delete({
        where: { id }
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Catégorie avec ID ${id} introuvable.`);
      }
      throw error;
    }
  }
}
