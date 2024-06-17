import { FlowRate } from "../flowRate/FlowRate";
import { PulseLog } from "../pulseLog/PulseLog";
import { Volume } from "../volume/Volume";

export type Sensor = {
  createdAt: Date;
  flowRates?: Array<FlowRate>;
  id: string;
  name: string | null;
  pin: number | null;
  pulseLogs?: Array<PulseLog>;
  updatedAt: Date;
  volumes?: Array<Volume>;
};
