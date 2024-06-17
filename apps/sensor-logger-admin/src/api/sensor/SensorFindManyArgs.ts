import { SensorWhereInput } from "./SensorWhereInput";
import { SensorOrderByInput } from "./SensorOrderByInput";

export type SensorFindManyArgs = {
  where?: SensorWhereInput;
  orderBy?: Array<SensorOrderByInput>;
  skip?: number;
  take?: number;
};
