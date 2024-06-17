import * as graphql from "@nestjs/graphql";
import { VolumeResolverBase } from "./base/volume.resolver.base";
import { Volume } from "./base/Volume";
import { VolumeService } from "./volume.service";

@graphql.Resolver(() => Volume)
export class VolumeResolver extends VolumeResolverBase {
  constructor(protected readonly service: VolumeService) {
    super(service);
  }
}
