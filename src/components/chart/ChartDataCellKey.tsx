import { PropsWithChildren } from "react";

export default function ChartDataCellKey({ children }: PropsWithChildren) {
  return (
    <td className="block p-2 bg-gray-100 font-medium text-left text-black">
      {children}
    </td>
  );
}
