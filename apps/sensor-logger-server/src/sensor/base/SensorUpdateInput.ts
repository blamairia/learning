/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FlowRateUpdateManyWithoutSensorsInput } from "./FlowRateUpdateManyWithoutSensorsInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PulseLogUpdateManyWithoutSensorsInput } from "./PulseLogUpdateManyWithoutSensorsInput";
import { VolumeUpdateManyWithoutSensorsInput } from "./VolumeUpdateManyWithoutSensorsInput";

@InputType()
class SensorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FlowRateUpdateManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => FlowRateUpdateManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => FlowRateUpdateManyWithoutSensorsInput, {
    nullable: true,
  })
  flowRates?: FlowRateUpdateManyWithoutSensorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pin?: number | null;

  @ApiProperty({
    required: false,
    type: () => PulseLogUpdateManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => PulseLogUpdateManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => PulseLogUpdateManyWithoutSensorsInput, {
    nullable: true,
  })
  pulseLogs?: PulseLogUpdateManyWithoutSensorsInput;

  @ApiProperty({
    required: false,
    type: () => VolumeUpdateManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => VolumeUpdateManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => VolumeUpdateManyWithoutSensorsInput, {
    nullable: true,
  })
  volumes?: VolumeUpdateManyWithoutSensorsInput;
}

export { SensorUpdateInput as SensorUpdateInput };
