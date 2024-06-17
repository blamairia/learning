import { Sensor } from "../sensor/Sensor";

export type Volume = {
  createdAt: Date;
  id: string;
  sensor?: Sensor | null;
  timestamp: Date | null;
  updatedAt: Date;
  volume: number | null;
};
