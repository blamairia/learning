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
import { VolumeWhereInput } from "./VolumeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VolumeCountArgs {
  @ApiProperty({
    required: false,
    type: () => VolumeWhereInput,
  })
  @Field(() => VolumeWhereInput, { nullable: true })
  @Type(() => VolumeWhereInput)
  where?: VolumeWhereInput;
}

export { VolumeCountArgs as VolumeCountArgs };
