import { PaymentMethodsWhereInput } from "./PaymentMethodsWhereInput";
import { PaymentMethodsOrderByInput } from "./PaymentMethodsOrderByInput";

export type PaymentMethodsFindManyArgs = {
  where?: PaymentMethodsWhereInput;
  orderBy?: Array<PaymentMethodsOrderByInput>;
  skip?: number;
  take?: number;
};
