import * as graphql from "@nestjs/graphql";
import { LiveData } from "../sensorData/LiveData";
import { LoggedData } from "../sensorData/LoggedData";
import { SensorDataService } from "./sensordata.service";

export class SensorDataResolver {
  constructor(protected readonly service: SensorDataService) {}

  @graphql.Query(() => LiveData)
  async GetLiveData(
    @graphql.Args()
    args: LiveData
  ): Promise<LiveData> {
    return this.service.GetLiveData(args);
  }

  @graphql.Query(() => LoggedData)
  async GetLoggedData(
    @graphql.Args()
    args: LoggedData
  ): Promise<LoggedData> {
    return this.service.GetLoggedData(args);
  }
}
