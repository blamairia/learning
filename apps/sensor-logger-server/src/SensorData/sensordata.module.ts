import { Module } from "@nestjs/common";
import { SensorDataService } from "./sensordata.service";
import { SensorDataController } from "./sensordata.controller";
import { SensorDataResolver } from "./sensordata.resolver";

@Module({
  controllers: [SensorDataController],
  providers: [SensorDataService, SensorDataResolver],
  exports: [SensorDataService],
})
export class SensorDataModule {}
