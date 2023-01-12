import Accordion from "@/components/accordion/Accordion";

export type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <Accordion title="Descripción" isOpened={true}>
      {description}
    </Accordion>
  );
}
