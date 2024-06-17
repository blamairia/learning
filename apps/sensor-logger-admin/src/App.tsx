import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FlowRateList } from "./flowRate/FlowRateList";
import { FlowRateCreate } from "./flowRate/FlowRateCreate";
import { FlowRateEdit } from "./flowRate/FlowRateEdit";
import { FlowRateShow } from "./flowRate/FlowRateShow";
import { VolumeList } from "./volume/VolumeList";
import { VolumeCreate } from "./volume/VolumeCreate";
import { VolumeEdit } from "./volume/VolumeEdit";
import { VolumeShow } from "./volume/VolumeShow";
import { PulseLogList } from "./pulseLog/PulseLogList";
import { PulseLogCreate } from "./pulseLog/PulseLogCreate";
import { PulseLogEdit } from "./pulseLog/PulseLogEdit";
import { PulseLogShow } from "./pulseLog/PulseLogShow";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SensorLogger"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FlowRate"
          list={FlowRateList}
          edit={FlowRateEdit}
          create={FlowRateCreate}
          show={FlowRateShow}
        />
        <Resource
          name="Volume"
          list={VolumeList}
          edit={VolumeEdit}
          create={VolumeCreate}
          show={VolumeShow}
        />
        <Resource
          name="PulseLog"
          list={PulseLogList}
          edit={PulseLogEdit}
          create={PulseLogCreate}
          show={PulseLogShow}
        />
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
