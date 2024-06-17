import { VolumeWhereInput } from "./VolumeWhereInput";
import { VolumeOrderByInput } from "./VolumeOrderByInput";

export type VolumeFindManyArgs = {
  where?: VolumeWhereInput;
  orderBy?: Array<VolumeOrderByInput>;
  skip?: number;
  take?: number;
};
