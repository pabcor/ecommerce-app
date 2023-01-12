import { PropsWithChildren } from "react";

export default function ChartDataCell({ children }: PropsWithChildren) {
  return <td className="block p-2 last:border-b text-left">{children}</td>;
}
