import { PropsWithChildren } from "react";

export function CheckoutFormContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-8 w-full lg:w-3/5 my-8">{children}</div>
  );
}
