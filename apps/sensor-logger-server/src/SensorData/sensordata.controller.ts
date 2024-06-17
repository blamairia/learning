import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SensorDataService } from "./sensordata.service";
import { LoggedData } from "../sensorData/LoggedData";
import { LiveData } from "../sensorData/LiveData";

@swagger.ApiTags("sensorData")
@common.Controller("sensorData")
export class SensorDataController {
  constructor(protected readonly service: SensorDataService) {}

  @common.Get("/live-data")
  @swagger.ApiOkResponse({
    type: LiveData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLiveData(
    @common.Body()
    body: LoggedData
  ): Promise<LiveData> {
        return this.service.GetLiveData(body);
      }

  @common.Get("/logged-data")
  @swagger.ApiOkResponse({
    type: LoggedData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLoggedData(
    @common.Body()
    body: LoggedData
  ): Promise<LoggedData> {
        return this.service.GetLoggedData(body);
      }
}
