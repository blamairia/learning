import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VolumeServiceBase } from "./base/volume.service.base";

@Injectable()
export class VolumeService extends VolumeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
