import { PulseLogWhereInput } from "./PulseLogWhereInput";
import { PulseLogOrderByInput } from "./PulseLogOrderByInput";

export type PulseLogFindManyArgs = {
  where?: PulseLogWhereInput;
  orderBy?: Array<PulseLogOrderByInput>;
  skip?: number;
  take?: number;
};
