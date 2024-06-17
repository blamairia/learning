import { Sensor } from "../sensor/Sensor";

export type PulseLog = {
  createdAt: Date;
  id: string;
  pulseCount: number | null;
  sensor?: Sensor | null;
  timestamp: Date | null;
  updatedAt: Date;
};
