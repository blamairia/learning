import { Module } from "@nestjs/common";
import { FlowRateModuleBase } from "./base/flowRate.module.base";
import { FlowRateService } from "./flowRate.service";
import { FlowRateController } from "./flowRate.controller";
import { FlowRateResolver } from "./flowRate.resolver";

@Module({
  imports: [FlowRateModuleBase],
  controllers: [FlowRateController],
  providers: [FlowRateService, FlowRateResolver],
  exports: [FlowRateService],
})
export class FlowRateModule {}
