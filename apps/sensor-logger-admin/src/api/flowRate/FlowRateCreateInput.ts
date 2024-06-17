import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type FlowRateCreateInput = {
  rate?: number | null;
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
};
