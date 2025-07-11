import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Type } from "generated/prisma/client";

@Injectable()
export class TypesService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Type[]> {
        return this.prisma.type.findMany();
    }
}