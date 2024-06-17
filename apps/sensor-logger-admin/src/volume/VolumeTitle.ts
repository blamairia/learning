import { Volume as TVolume } from "../api/volume/Volume";

export const VOLUME_TITLE_FIELD = "id";

export const VolumeTitle = (record: TVolume): string => {
  return record.id?.toString() || String(record.id);
};
