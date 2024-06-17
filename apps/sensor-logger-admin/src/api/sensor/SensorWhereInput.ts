import { FlowRateListRelationFilter } from "../flowRate/FlowRateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PulseLogListRelationFilter } from "../pulseLog/PulseLogListRelationFilter";
import { VolumeListRelationFilter } from "../volume/VolumeListRelationFilter";

export type SensorWhereInput = {
  flowRates?: FlowRateListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pin?: IntNullableFilter;
  pulseLogs?: PulseLogListRelationFilter;
  volumes?: VolumeListRelationFilter;
};
