import ChartRow from "./ChartRow";

export type ChartBodyProps = {
  rows: { key: string; values: string[] }[];
};

export default function ChartBody({ rows }: ChartBodyProps) {
  return (
    <tbody className="relative block overflow-x-auto w-auto whitespace-nowrap">
      {rows.map((row, index) => {
        return <ChartRow name={row.key} values={row.values} key={index} />;
      })}
    </tbody>
  );
}
