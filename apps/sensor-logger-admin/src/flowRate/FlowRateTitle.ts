import { FlowRate as TFlowRate } from "../api/flowRate/FlowRate";

export const FLOWRATE_TITLE_FIELD = "id";

export const FlowRateTitle = (record: TFlowRate): string => {
  return record.id?.toString() || String(record.id);
};
