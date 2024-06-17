import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SensorService } from "./sensor.service";
import { SensorControllerBase } from "./base/sensor.controller.base";

@swagger.ApiTags("sensors")
@common.Controller("sensors")
export class SensorController extends SensorControllerBase {
  constructor(protected readonly service: SensorService) {
    super(service);
  }
}
