import { Prisma } from 'generated/prisma/client';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, IsMongoId } from 'class-validator';

export const foodsArgs = Prisma.validator<Prisma.FoodDefaultArgs>()({
  select: {
    id       : true,
    name     : true,
    description : true,
    price    : true,
    min_delivery_time : true,
    max_delivery_time : true,
    free_delivery : true,
    veg : true,
    discount : true,
    sell_count : true,
    restaurant: true,
    image : true,
    createdAt : true,
    updatedAt : true,
  },
});
export const foodArgs = Prisma.validator<Prisma.FoodDefaultArgs>()({
    select: {
      ...foodsArgs.select,      // on reprend toutes les clés existantes
      category  : true,
      variants : true,
    cuisine : true,
    },
  });

export type FoodsDto = Prisma.FoodGetPayload<typeof foodsArgs>;
export type FoodDto = Prisma.FoodGetPayload<typeof foodArgs>;


export class CreateFoodDto {
  @ApiProperty() @IsString() name: string;
  @ApiProperty() @IsString() image: string;
  @ApiProperty() @IsMongoId() @IsOptional() restaurantId: string;
  @ApiProperty() @IsMongoId() @IsOptional() categoryId: string;
  @ApiProperty() @IsString() description: string;
  @ApiProperty() @IsInt() price: number;
  @ApiProperty() @IsInt() min_delivery_time: number;
  @ApiProperty() @IsInt() max_delivery_time: number;
  @ApiProperty() @IsBoolean() free_delivery: boolean;
  @ApiProperty() @IsBoolean() veg: boolean;
  @ApiProperty() @IsInt() discount: number;
  @ApiProperty() @IsInt() sell_count: number;
}

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
}
