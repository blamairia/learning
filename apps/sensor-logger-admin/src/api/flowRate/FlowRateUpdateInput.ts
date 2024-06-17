import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type FlowRateUpdateInput = {
  rate?: number | null;
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
};
