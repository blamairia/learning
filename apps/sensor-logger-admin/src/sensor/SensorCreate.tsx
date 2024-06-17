import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { FlowRateTitle } from "../flowRate/FlowRateTitle";
import { PulseLogTitle } from "../pulseLog/PulseLogTitle";
import { VolumeTitle } from "../volume/VolumeTitle";

export const SensorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="flowRates"
          reference="FlowRate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlowRateTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="pin" source="pin" />
        <ReferenceArrayInput
          source="pulseLogs"
          reference="PulseLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PulseLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="volumes"
          reference="Volume"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VolumeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
