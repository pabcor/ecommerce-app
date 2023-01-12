import Accordion from "@/components/accordion/Accordion";

export type ProductReturnsPolicyProps = {
  returnsPolicy: string;
};

export default function ProductReturnsPolicy({
  returnsPolicy,
}: ProductReturnsPolicyProps) {
  return (
    <Accordion title="Políticas de devolución" isOpened={false}>
      {returnsPolicy}
    </Accordion>
  );
}
