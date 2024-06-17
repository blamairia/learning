import { FlowRateUpdateManyWithoutSensorsInput } from "./FlowRateUpdateManyWithoutSensorsInput";
import { PulseLogUpdateManyWithoutSensorsInput } from "./PulseLogUpdateManyWithoutSensorsInput";
import { VolumeUpdateManyWithoutSensorsInput } from "./VolumeUpdateManyWithoutSensorsInput";

export type SensorUpdateInput = {
  flowRates?: FlowRateUpdateManyWithoutSensorsInput;
  name?: string | null;
  pin?: number | null;
  pulseLogs?: PulseLogUpdateManyWithoutSensorsInput;
  volumes?: VolumeUpdateManyWithoutSensorsInput;
};
