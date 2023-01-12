import Accordion from "@/components/accordion/Accordion";
import Chart, { ChartProps } from "@/components/chart/Chart";
import Heading from "@/components/heading/Heading";
import Selector, { SelectorProps } from "@/components/selector/Selector";

export type ProductAttributeProps = {
  name: string;
  required?: boolean;
  value?: string;
  selectable?: SelectorProps;
  chart?: ChartProps;
};

export default function ProductAttribute({
  name,
  value,
  selectable,
  chart,
}: ProductAttributeProps) {
  if (selectable) {
    return (
      <div className="flex flex-col gap-2 mb-6">
        <Heading as="h1" size="lg">
          {name}:
        </Heading>
        <Selector
          label={selectable.label}
          required={selectable.required}
          items={selectable.items}
        />
      </div>
    );
  }

  if (chart) {
    return (
      <Accordion title={name} isOpened={false}>
        <Chart columns={chart.columns} rows={chart.rows} />
      </Accordion>
    );
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <Heading as="h1" size="lg">
        {name}:
      </Heading>
      <div className="text-gray-700"> {value}</div>
    </div>
  );
}
