import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type PulseLogUpdateInput = {
  pulseCount?: number | null;
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
};
