import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PulseLogServiceBase } from "./base/pulseLog.service.base";

@Injectable()
export class PulseLogService extends PulseLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
