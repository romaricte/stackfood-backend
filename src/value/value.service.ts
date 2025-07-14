import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Value } from "generated/prisma/client";
import { ValueDto,VariantDto } from "./dto/value.dto";
import { Variant } from "generated/prisma/client";

@Injectable()

export class ValueService {
    constructor(private prisma: PrismaService) { }

    async findAllValue(): Promise<Value[]> {
        return await this.prisma.value.findMany();
    }
    async findAllVariant(): Promise<Variant[]> {
        return await this.prisma.variant.findMany();
    }
    async createValue(valueDto: ValueDto): Promise<Value> {
        return await this.prisma.value.create({ data: {
            label: valueDto.label,
            optionPrice: valueDto.optionPrice,
            stock_unlimited: valueDto.stock_unlimited,
            stock: valueDto.stock,
            variant: { connect: { variantId: valueDto.variantId } }
        } });
    }

    // async createVariant(variantDto: VariantDto): Promise<Variant> {
    //     return await this.prisma.variant.create({ data: {
    //         name: variantDto.name,
    //         type: variantDto.type,
    //         min: variantDto.min,
    //         max: variantDto.max,
    //         required: variantDto.required,
    //         foodId: { connect: { foodId: variantDto.foodId } }
    //     } });
    // }
    // async updateValue(valueDto: ValueDto): Promise<Value> {
    //     return this.prisma.value.update({ where: { id: valueDto.id }, data: valueDto });
    // }
    // async deleteValue(id: string): Promise<void> {
    //     try {
    //         await this.prisma.value.delete({
    //             where: { id }
    //         });
    //     } catch (error) {
    //         if (error.code === 'P2025') {
    //             throw new NotFoundException(`Value avec ID ${id} introuvable.`);
    //         }
    //         throw error;
    //     }
    // }
}   