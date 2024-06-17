import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FlowRateWhereInput = {
  id?: StringFilter;
  rate?: FloatNullableFilter;
  sensor?: SensorWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
