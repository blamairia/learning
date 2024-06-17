import { PulseLog as TPulseLog } from "../api/pulseLog/PulseLog";

export const PULSELOG_TITLE_FIELD = "id";

export const PulseLogTitle = (record: TPulseLog): string => {
  return record.id?.toString() || String(record.id);
};
