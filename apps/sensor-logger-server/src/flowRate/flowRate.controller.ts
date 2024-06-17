import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlowRateService } from "./flowRate.service";
import { FlowRateControllerBase } from "./base/flowRate.controller.base";

@swagger.ApiTags("flowRates")
@common.Controller("flowRates")
export class FlowRateController extends FlowRateControllerBase {
  constructor(protected readonly service: FlowRateService) {
    super(service);
  }
}
