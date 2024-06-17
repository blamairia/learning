import { Module } from "@nestjs/common";
import { SensorModuleBase } from "./base/sensor.module.base";
import { SensorService } from "./sensor.service";
import { SensorController } from "./sensor.controller";
import { SensorResolver } from "./sensor.resolver";

@Module({
  imports: [SensorModuleBase],
  controllers: [SensorController],
  providers: [SensorService, SensorResolver],
  exports: [SensorService],
})
export class SensorModule {}
