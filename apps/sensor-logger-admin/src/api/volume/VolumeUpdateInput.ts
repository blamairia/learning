import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type VolumeUpdateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  volume?: number | null;
};
