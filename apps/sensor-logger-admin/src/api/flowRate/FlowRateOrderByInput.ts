import { SortOrder } from "../../util/SortOrder";

export type FlowRateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  rate?: SortOrder;
  sensorId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
