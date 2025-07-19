import { Prisma } from 'generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, IsMongoId } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
const cuisineArgs = Prisma.validator<Prisma.CuisineDefaultArgs>()({
  select: {
    cuisineId: true,
    name: true,
    image: true,
    status: true,
    restaurantId: true,
    foodId: true,
    createdAt: true,
    updatedAt: true,
  },
});
export type CuisineDto = Prisma.CuisineGetPayload<typeof cuisineArgs>;

export class CreateCuisineDto {
  @ApiProperty() @IsString() name: string;
  @ApiProperty() @IsString() image: string;
  @ApiProperty() @IsBoolean() status: boolean;
  @ApiProperty() @IsMongoId() @IsOptional() restaurantId: string;
  @ApiProperty() @IsMongoId() @IsOptional() foodId: string;
}

export class UpdateCuisineDto extends PartialType(CreateCuisineDto) {
}

