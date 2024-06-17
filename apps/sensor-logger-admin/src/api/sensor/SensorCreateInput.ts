import { FlowRateCreateNestedManyWithoutSensorsInput } from "./FlowRateCreateNestedManyWithoutSensorsInput";
import { PulseLogCreateNestedManyWithoutSensorsInput } from "./PulseLogCreateNestedManyWithoutSensorsInput";
import { VolumeCreateNestedManyWithoutSensorsInput } from "./VolumeCreateNestedManyWithoutSensorsInput";

export type SensorCreateInput = {
  flowRates?: FlowRateCreateNestedManyWithoutSensorsInput;
  name?: string | null;
  pin?: number | null;
  pulseLogs?: PulseLogCreateNestedManyWithoutSensorsInput;
  volumes?: VolumeCreateNestedManyWithoutSensorsInput;
};
