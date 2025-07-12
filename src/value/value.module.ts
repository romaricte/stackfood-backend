import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ValueController } from "./value.controller";
import { ValueService } from "./value.service";

@Module({
    imports: [PrismaModule],
    controllers: [ValueController],
    providers: [ValueService],
})
export class ValueModule {}