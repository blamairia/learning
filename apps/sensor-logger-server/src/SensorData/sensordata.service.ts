import { Injectable } from "@nestjs/common";
import { LiveData } from "../sensorData/LiveData";
import { LoggedData } from "../sensorData/LoggedData";

@Injectable()
export class SensorDataService {
  constructor() {}
  async GetLiveData(args: LiveData): Promise<LiveData> {
    throw new Error("Not implemented");
  }
  async GetLoggedData(args: LoggedData): Promise<LoggedData> {
    throw new Error("Not implemented");
  }
}
