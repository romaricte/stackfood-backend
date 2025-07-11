import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { Module } from "@nestjs/common";

@Module({
    providers: [TypesService],
    controllers: [TypesController],
    exports: [TypesService],
})
export class TypesModule {}
