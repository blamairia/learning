import { SensorWhereUniqueInput } from "./SensorWhereUniqueInput";
import { SensorUpdateInput } from "./SensorUpdateInput";

export type UpdateSensorArgs = {
  where: SensorWhereUniqueInput;
  data: SensorUpdateInput;
};
