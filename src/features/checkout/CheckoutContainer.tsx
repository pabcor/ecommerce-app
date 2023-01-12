import { PropsWithChildren } from "react";

export function CheckoutContainer({ children }: PropsWithChildren) {
  return <div className="container flex gap-8 w-full">{children}</div>;
}
