import ChartHeader from "./ChartHeader";
import ChartHeaderEmpty from "./ChartHeaderEmpty";

export type ChartHeadProps = {
  columns: string[];
};

export default function ChartHead({ columns }: ChartHeadProps) {
  return (
    <thead className="float-left block">
      <tr className="block">
        <ChartHeaderEmpty />
        {columns.map((col, index) => {
          return <ChartHeader key={index}>{col}</ChartHeader>;
        })}
      </tr>
    </thead>
  );
}
