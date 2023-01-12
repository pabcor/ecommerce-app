import { ReactNode } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { CheckoutValues } from "./Checkout";

export type CheckoutFormProps = {
  handleSubmit: UseFormHandleSubmit<CheckoutValues>;
  children?: ReactNode;
};

export function CheckoutForm({ children, handleSubmit }: CheckoutFormProps) {
  const onSubmit = (data: CheckoutValues) => console.log(data);

  return (
    <form id="checkout" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}
