import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type PulseLogCreateInput = {
  pulseCount?: number | null;
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
};
