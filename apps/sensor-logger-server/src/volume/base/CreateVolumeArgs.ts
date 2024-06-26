/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VolumeCreateInput } from "./VolumeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateVolumeArgs {
  @ApiProperty({
    required: true,
    type: () => VolumeCreateInput,
  })
  @ValidateNested()
  @Type(() => VolumeCreateInput)
  @Field(() => VolumeCreateInput, { nullable: false })
  data!: VolumeCreateInput;
}

export { CreateVolumeArgs as CreateVolumeArgs };
