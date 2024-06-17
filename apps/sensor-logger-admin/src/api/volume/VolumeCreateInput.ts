import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type VolumeCreateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  volume?: number | null;
};
