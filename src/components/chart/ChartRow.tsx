import ChartDataCell from "./ChartDataCell";
import ChartDataCellKey from "./ChartDataCellKey";

export type ChartRowProps = {
  name: string;
  values: string[];
};

export default function ChartRow({ name, values }: ChartRowProps) {
  return (
    <tr className="inline-block align-top w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <ChartDataCellKey>{name}</ChartDataCellKey>
      {values.map((value, index) => {
        return <ChartDataCell key={index}>{value}</ChartDataCell>;
      })}
    </tr>
  );
}
