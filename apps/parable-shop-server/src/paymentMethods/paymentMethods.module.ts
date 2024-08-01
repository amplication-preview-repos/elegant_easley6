import { Module } from "@nestjs/common";
import { PaymentMethodsModuleBase } from "./base/paymentMethods.module.base";
import { PaymentMethodsService } from "./paymentMethods.service";
import { PaymentMethodsController } from "./paymentMethods.controller";
import { PaymentMethodsResolver } from "./paymentMethods.resolver";

@Module({
  imports: [PaymentMethodsModuleBase],
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService, PaymentMethodsResolver],
  exports: [PaymentMethodsService],
})
export class PaymentMethodsModule {}
