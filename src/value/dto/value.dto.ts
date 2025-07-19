// src/value/dto/value.dto.ts
import { Prisma } from 'generated/prisma/client';

/**
 * DTO « lecture » pour Value
 * On sélectionne uniquement les champs que l’API renvoie.
 */
const valueArgs = Prisma.validator<Prisma.ValueDefaultArgs>()({
  select: {
    valueId: true,
    label: true,
    optionPrice: true,
    stock_unlimited: true,
    stock: true,
    variantId: true,
  },
});
export type ValueDto = Prisma.ValueGetPayload<typeof valueArgs>;

/**
 * DTO « lecture » pour Variant (avec ses Value)
 */
const variantArgs = Prisma.validator<Prisma.VariantDefaultArgs>()({
  select: {
    variantId: true,
    name: true,
    type: true,
    min: true,
    max: true,
    required: true,
    values: {
      select: {
        valueId: true,
        label: true,
        optionPrice: true,
      },
    },
  },
});
export type VariantDto = Prisma.VariantGetPayload<typeof variantArgs>;

// -------------------------------
// DTO d'entrées (création)
// -------------------------------
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, IsMongoId } from 'class-validator';

export class CreateValueDto {
  @ApiProperty() @IsString() label: string;
  @ApiProperty() @IsInt() optionPrice: number;
  @ApiProperty() @IsBoolean() stock_unlimited: boolean;
  @ApiProperty() @IsInt() stock: number;
  @ApiProperty() @IsMongoId() variantId: string;
}

export class CreateVariantDto {
  @ApiProperty() @IsString() name: string;
  @ApiProperty() @IsString() type: string;
  @ApiProperty() @IsString() min: string;
  @ApiProperty() @IsString() max: string;
  @ApiProperty() @IsBoolean() required: boolean;
  @ApiProperty() @IsMongoId() foodId: string;
  @ApiProperty({ type: [CreateValueDto], required: false })
  @IsOptional()
  values?: CreateValueDto[];
}

// DTO de mise à jour – tous les champs optionnels + id obligatoire
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVariantDto extends PartialType(CreateVariantDto) {}

export class UpdateValueDto extends PartialType(CreateValueDto) {}
  