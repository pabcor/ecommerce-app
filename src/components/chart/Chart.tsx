import ChartBody from "./ChartBody";
import ChartHead from "./ChartHead";

export type ChartProps = {
  columns: string[];
  rows: { key: string; values: string[] }[];
};

export default function Chart({ columns, rows }: ChartProps) {
  return (
    <div className="border rounded-sm">
      <table className="w-full">
        <ChartHead columns={columns} />
        <ChartBody rows={rows} />
      </table>
    </div>
  );
}
