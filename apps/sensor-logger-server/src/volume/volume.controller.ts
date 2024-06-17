import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VolumeService } from "./volume.service";
import { VolumeControllerBase } from "./base/volume.controller.base";

@swagger.ApiTags("volumes")
@common.Controller("volumes")
export class VolumeController extends VolumeControllerBase {
  constructor(protected readonly service: VolumeService) {
    super(service);
  }
}
