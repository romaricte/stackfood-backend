import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Value } from "generated/prisma/client";
import { ValueDto, VariantDto, CreateValueDto, CreateVariantDto, UpdateVariantDto, UpdateValueDto } from "./dto/value.dto";
import { Variant } from "generated/prisma/client";

@Injectable()

export class ValueService {
    constructor(private prisma: PrismaService) { }

    async findAllValue(): Promise<Value[]> {
        return await this.prisma.value.findMany();
    }
    async findAllValueByVariantId(variantId: string): Promise<Value[]> {
        return await this.prisma.value.findMany({
            where: {
                variantId,
            },
        });
    }
    async findAllVariant(): Promise<Variant[]> {
        return await this.prisma.variant.findMany({
            include: {
                values: true,
            },
        });
    }
    async createValue(valueDto: CreateValueDto): Promise<Value> {
        return await this.prisma.value.create({ data: {
            label: valueDto.label,
            optionPrice: valueDto.optionPrice,
            stock_unlimited: valueDto.stock_unlimited,
            stock: valueDto.stock,
            variant: { connect: { variantId: valueDto.variantId } }
        } });
    }

    async createVariant(variantDto: CreateVariantDto): Promise<Variant> {
        return await this.prisma.variant.create({
            data: {
                name: variantDto.name,
                type: variantDto.type,
                min: variantDto.min,
                max: variantDto.max,
                required: variantDto.required,
                food: { connect: { id: variantDto.foodId } },
                // création imbriquée de values si fourni
                values: variantDto.values && variantDto.values.length
                    ? {
                        create: variantDto.values.map(v => ({
                            label: v.label,
                            optionPrice: v.optionPrice,
                            stock_unlimited: v.stock_unlimited,
                            stock: v.stock,
                        }))
                      }
                    : undefined,
            },
            include: { values: true },
        });
    }
    async updateVariant(variantId: string, dto: UpdateVariantDto): Promise<Variant> {
        return this.prisma.variant.update({
          where: { variantId },
          data: {
            name: dto.name,
            type: dto.type,
            min: dto.min,
            max: dto.max,
            required: dto.required,
            // valeurs : utilisez updateMany / create / deleteMany selon vos besoins
            // values: {
            //     updateMany: dto.values?.map(v => ({
            //         where: { valueId: v.valueId },
            //         data: {
            //             label: v.label,
            //             optionPrice: v.optionPrice,
            //             stock_unlimited: v.stock_unlimited,
            //             stock: v.stock,
            //         },
            //     })),
            // },
          },
          include: { values: true },
        });
      }
      async updateValue(valueId: string, dto: UpdateValueDto): Promise<Value> {
        return this.prisma.value.update({
          where: { valueId },
          data: {
            label: dto.label,
            optionPrice: dto.optionPrice,
            stock_unlimited: dto.stock_unlimited,
            stock: dto.stock,
          },
        });
      }
   
      async deleteValue(valueId: string): Promise<void> {
        try {
            await this.prisma.value.delete({
                where: { valueId }
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException(`Value avec ID ${valueId} introuvable.`);
            }
            throw error;
        }
        return;
    }
    async deleteVariant(variantId: string): Promise<void> {
        try {            
            await this.prisma.variant.delete({
                where: { variantId },
                
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException(`Variant avec ID ${variantId} introuvable.`);
            }
            throw error;
        }
        return;
    }
}   