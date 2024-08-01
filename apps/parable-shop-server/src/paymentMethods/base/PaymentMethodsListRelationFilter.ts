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
import { PaymentMethodsWhereInput } from "./PaymentMethodsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentMethodsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentMethodsWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodsWhereInput)
  @IsOptional()
  @Field(() => PaymentMethodsWhereInput, {
    nullable: true,
  })
  every?: PaymentMethodsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodsWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodsWhereInput)
  @IsOptional()
  @Field(() => PaymentMethodsWhereInput, {
    nullable: true,
  })
  some?: PaymentMethodsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodsWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodsWhereInput)
  @IsOptional()
  @Field(() => PaymentMethodsWhereInput, {
    nullable: true,
  })
  none?: PaymentMethodsWhereInput;
}
export { PaymentMethodsListRelationFilter as PaymentMethodsListRelationFilter };
