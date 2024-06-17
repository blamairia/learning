import { SortOrder } from "../../util/SortOrder";

export type VolumeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sensorId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
