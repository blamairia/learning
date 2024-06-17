import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { SensorTitle } from "../sensor/SensorTitle";

export const VolumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="sensor.id" reference="Sensor" label="sensor">
          <SelectInput optionText={SensorTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
