import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentMethodsServiceBase } from "./base/paymentMethods.service.base";

@Injectable()
export class PaymentMethodsService extends PaymentMethodsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
