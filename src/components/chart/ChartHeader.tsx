import { PropsWithChildren } from "react";

export default function ChartHeader({ children }: PropsWithChildren) {
  return (
    <th className="block p-2 bg-gray-100 font-medium text-right whitespace-nowrap text-black">
      {children}
    </th>
  );
}
