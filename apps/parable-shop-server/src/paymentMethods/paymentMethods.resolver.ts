import * as graphql from "@nestjs/graphql";
import { PaymentMethodsResolverBase } from "./base/paymentMethods.resolver.base";
import { PaymentMethods } from "./base/PaymentMethods";
import { PaymentMethodsService } from "./paymentMethods.service";

@graphql.Resolver(() => PaymentMethods)
export class PaymentMethodsResolver extends PaymentMethodsResolverBase {
  constructor(protected readonly service: PaymentMethodsService) {
    super(service);
  }
}
