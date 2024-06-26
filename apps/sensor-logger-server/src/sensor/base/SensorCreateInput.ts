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
import { FlowRateCreateNestedManyWithoutSensorsInput } from "./FlowRateCreateNestedManyWithoutSensorsInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PulseLogCreateNestedManyWithoutSensorsInput } from "./PulseLogCreateNestedManyWithoutSensorsInput";
import { VolumeCreateNestedManyWithoutSensorsInput } from "./VolumeCreateNestedManyWithoutSensorsInput";

@InputType()
class SensorCreateInput {
  @ApiProperty({
    required: false,
    type: () => FlowRateCreateNestedManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => FlowRateCreateNestedManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => FlowRateCreateNestedManyWithoutSensorsInput, {
    nullable: true,
  })
  flowRates?: FlowRateCreateNestedManyWithoutSensorsInput;

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
    type: () => PulseLogCreateNestedManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => PulseLogCreateNestedManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => PulseLogCreateNestedManyWithoutSensorsInput, {
    nullable: true,
  })
  pulseLogs?: PulseLogCreateNestedManyWithoutSensorsInput;

  @ApiProperty({
    required: false,
    type: () => VolumeCreateNestedManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => VolumeCreateNestedManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => VolumeCreateNestedManyWithoutSensorsInput, {
    nullable: true,
  })
  volumes?: VolumeCreateNestedManyWithoutSensorsInput;
}

export { SensorCreateInput as SensorCreateInput };
