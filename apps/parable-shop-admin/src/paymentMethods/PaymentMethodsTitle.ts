import { PaymentMethods as TPaymentMethods } from "../api/paymentMethods/PaymentMethods";

export const PAYMENTMETHODS_TITLE_FIELD = "id";

export const PaymentMethodsTitle = (record: TPaymentMethods): string => {
  return record.id?.toString() || String(record.id);
};
