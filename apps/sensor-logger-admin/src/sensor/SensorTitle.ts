import { Sensor as TSensor } from "../api/sensor/Sensor";

export const SENSOR_TITLE_FIELD = "name";

export const SensorTitle = (record: TSensor): string => {
  return record.name?.toString() || String(record.id);
};
