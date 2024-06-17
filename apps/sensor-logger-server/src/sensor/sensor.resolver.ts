import * as graphql from "@nestjs/graphql";
import { SensorResolverBase } from "./base/sensor.resolver.base";
import { Sensor } from "./base/Sensor";
import { SensorService } from "./sensor.service";

@graphql.Resolver(() => Sensor)
export class SensorResolver extends SensorResolverBase {
  constructor(protected readonly service: SensorService) {
    super(service);
  }
}
