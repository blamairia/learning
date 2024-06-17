import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SensorServiceBase } from "./base/sensor.service.base";

@Injectable()
export class SensorService extends SensorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
