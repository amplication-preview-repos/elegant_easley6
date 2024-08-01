import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentMethodsService } from "./paymentMethods.service";
import { PaymentMethodsControllerBase } from "./base/paymentMethods.controller.base";

@swagger.ApiTags("paymentMethods")
@common.Controller("paymentMethods")
export class PaymentMethodsController extends PaymentMethodsControllerBase {
  constructor(protected readonly service: PaymentMethodsService) {
    super(service);
  }
}
