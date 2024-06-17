import { Sensor } from "../sensor/Sensor";

export type FlowRate = {
  createdAt: Date;
  id: string;
  rate: number | null;
  sensor?: Sensor | null;
  timestamp: Date | null;
  updatedAt: Date;
};
