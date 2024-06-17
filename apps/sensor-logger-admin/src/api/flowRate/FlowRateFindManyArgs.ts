import { FlowRateWhereInput } from "./FlowRateWhereInput";
import { FlowRateOrderByInput } from "./FlowRateOrderByInput";

export type FlowRateFindManyArgs = {
  where?: FlowRateWhereInput;
  orderBy?: Array<FlowRateOrderByInput>;
  skip?: number;
  take?: number;
};
