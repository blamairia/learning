import { VolumeWhereUniqueInput } from "./VolumeWhereUniqueInput";
import { VolumeUpdateInput } from "./VolumeUpdateInput";

export type UpdateVolumeArgs = {
  where: VolumeWhereUniqueInput;
  data: VolumeUpdateInput;
};
