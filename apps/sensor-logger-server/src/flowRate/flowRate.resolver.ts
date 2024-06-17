import * as graphql from "@nestjs/graphql";
import { FlowRateResolverBase } from "./base/flowRate.resolver.base";
import { FlowRate } from "./base/FlowRate";
import { FlowRateService } from "./flowRate.service";

@graphql.Resolver(() => FlowRate)
export class FlowRateResolver extends FlowRateResolverBase {
  constructor(protected readonly service: FlowRateService) {
    super(service);
  }
}
