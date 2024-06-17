import { Module } from "@nestjs/common";
import { VolumeModuleBase } from "./base/volume.module.base";
import { VolumeService } from "./volume.service";
import { VolumeController } from "./volume.controller";
import { VolumeResolver } from "./volume.resolver";

@Module({
  imports: [VolumeModuleBase],
  controllers: [VolumeController],
  providers: [VolumeService, VolumeResolver],
  exports: [VolumeService],
})
export class VolumeModule {}
