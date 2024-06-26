/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Volume as PrismaVolume,
  Sensor as PrismaSensor,
} from "@prisma/client";

export class VolumeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VolumeCountArgs, "select">): Promise<number> {
    return this.prisma.volume.count(args);
  }

  async volumes(args: Prisma.VolumeFindManyArgs): Promise<PrismaVolume[]> {
    return this.prisma.volume.findMany(args);
  }
  async volume(
    args: Prisma.VolumeFindUniqueArgs
  ): Promise<PrismaVolume | null> {
    return this.prisma.volume.findUnique(args);
  }
  async createVolume(args: Prisma.VolumeCreateArgs): Promise<PrismaVolume> {
    return this.prisma.volume.create(args);
  }
  async updateVolume(args: Prisma.VolumeUpdateArgs): Promise<PrismaVolume> {
    return this.prisma.volume.update(args);
  }
  async deleteVolume(args: Prisma.VolumeDeleteArgs): Promise<PrismaVolume> {
    return this.prisma.volume.delete(args);
  }

  async getSensor(parentId: string): Promise<PrismaSensor | null> {
    return this.prisma.volume
      .findUnique({
        where: { id: parentId },
      })
      .sensor();
  }
}
