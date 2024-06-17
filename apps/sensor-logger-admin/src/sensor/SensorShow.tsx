import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SENSOR_TITLE_FIELD } from "./SensorTitle";

export const SensorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="pin" source="pin" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FlowRate"
          target="sensorId"
          label="FlowRates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rate" source="rate" />
            <ReferenceField
              label="sensor"
              source="sensor.id"
              reference="Sensor"
            >
              <TextField source={SENSOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PulseLog"
          target="sensorId"
          label="PulseLogs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="pulseCount" source="pulseCount" />
            <ReferenceField
              label="sensor"
              source="sensor.id"
              reference="Sensor"
            >
              <TextField source={SENSOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Volume"
          target="sensorId"
          label="Volumes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="sensor"
              source="sensor.id"
              reference="Sensor"
            >
              <TextField source={SENSOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="volume" source="volume" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
