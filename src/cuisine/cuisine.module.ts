import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CuisineController } from "./cuisine.controller";
import { CuisineService } from "./cuisine.service";

@Module({
    imports: [PrismaModule],
    controllers: [CuisineController],
    providers: [CuisineService],
})
export class CuisineModule {}