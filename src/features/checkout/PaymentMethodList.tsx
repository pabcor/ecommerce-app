import Heading from "@/components/heading/Heading";
import { forwardRef, RefObject, useCallback } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutValues } from "./Checkout";
import { PaymentMethod } from "./PaymentMethod";

export type PaymentMethod = {
  id: number;
  name: string;
  description?: string;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: "Efectivo",
    description:
      "Cras ultricies dui quam, facilisis consequat tellus interdum eget. Nunc eu commodo lacus.",
  },
  {
    id: 2,
    name: "Transferencia bancaria",
    description:
      "Cras ultricies dui quam, facilisis consequat tellus interdum eget. Nunc eu commodo lacus.",
  },
];

export type PaymentMethodListProps = {
  shipmentMethodRef: RefObject<HTMLDivElement>;
  setValue: UseFormSetValue<CheckoutValues>;
  value: number;
};

export const PaymentMethodList = forwardRef<
  HTMLDivElement | null,
  PaymentMethodListProps
>(function PaymentMethodList({ shipmentMethodRef, setValue, value }, ref) {
  const onClick = (index: number) => () => {
    setValue("paymentMethod", paymentMethods[index].id);

    if (typeof ref !== "function") {
      shipmentMethodRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <Heading as="h5" size="xl">
        1. Forma de pago
      </Heading>
      {paymentMethods.map((method, index) => {
        return (
          <PaymentMethod
            name={method.name}
            description={method.description}
            isActive={paymentMethods[index].id === value}
            onClick={onClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
});
