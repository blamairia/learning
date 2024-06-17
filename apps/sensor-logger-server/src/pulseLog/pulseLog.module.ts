import { Module } from "@nestjs/common";
import { PulseLogModuleBase } from "./base/pulseLog.module.base";
import { PulseLogService } from "./pulseLog.service";
import { PulseLogController } from "./pulseLog.controller";
import { PulseLogResolver } from "./pulseLog.resolver";

@Module({
  imports: [PulseLogModuleBase],
  controllers: [PulseLogController],
  providers: [PulseLogService, PulseLogResolver],
  exports: [PulseLogService],
})
export class PulseLogModule {}
