/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FlowRate } from "./FlowRate";
import { FlowRateCountArgs } from "./FlowRateCountArgs";
import { FlowRateFindManyArgs } from "./FlowRateFindManyArgs";
import { FlowRateFindUniqueArgs } from "./FlowRateFindUniqueArgs";
import { CreateFlowRateArgs } from "./CreateFlowRateArgs";
import { UpdateFlowRateArgs } from "./UpdateFlowRateArgs";
import { DeleteFlowRateArgs } from "./DeleteFlowRateArgs";
import { Sensor } from "../../sensor/base/Sensor";
import { FlowRateService } from "../flowRate.service";
@graphql.Resolver(() => FlowRate)
export class FlowRateResolverBase {
  constructor(protected readonly service: FlowRateService) {}

  async _flowRatesMeta(
    @graphql.Args() args: FlowRateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FlowRate])
  async flowRates(
    @graphql.Args() args: FlowRateFindManyArgs
  ): Promise<FlowRate[]> {
    return this.service.flowRates(args);
  }

  @graphql.Query(() => FlowRate, { nullable: true })
  async flowRate(
    @graphql.Args() args: FlowRateFindUniqueArgs
  ): Promise<FlowRate | null> {
    const result = await this.service.flowRate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FlowRate)
  async createFlowRate(
    @graphql.Args() args: CreateFlowRateArgs
  ): Promise<FlowRate> {
    return await this.service.createFlowRate({
      ...args,
      data: {
        ...args.data,

        sensor: args.data.sensor
          ? {
              connect: args.data.sensor,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FlowRate)
  async updateFlowRate(
    @graphql.Args() args: UpdateFlowRateArgs
  ): Promise<FlowRate | null> {
    try {
      return await this.service.updateFlowRate({
        ...args,
        data: {
          ...args.data,

          sensor: args.data.sensor
            ? {
                connect: args.data.sensor,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FlowRate)
  async deleteFlowRate(
    @graphql.Args() args: DeleteFlowRateArgs
  ): Promise<FlowRate | null> {
    try {
      return await this.service.deleteFlowRate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Sensor, {
    nullable: true,
    name: "sensor",
  })
  async getSensor(@graphql.Parent() parent: FlowRate): Promise<Sensor | null> {
    const result = await this.service.getSensor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
