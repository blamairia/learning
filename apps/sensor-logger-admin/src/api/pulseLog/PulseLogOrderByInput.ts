import { SortOrder } from "../../util/SortOrder";

export type PulseLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pulseCount?: SortOrder;
  sensorId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
