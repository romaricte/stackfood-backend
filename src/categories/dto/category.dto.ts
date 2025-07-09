import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";


export class CategoryDto {
  @ApiProperty()
  @IsString()
  id: string;
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  image: string;
  @ApiProperty()
  @IsBoolean()
  status: boolean;

}