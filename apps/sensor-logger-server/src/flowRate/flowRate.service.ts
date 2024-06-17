import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlowRateServiceBase } from "./base/flowRate.service.base";

@Injectable()
export class FlowRateService extends FlowRateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
