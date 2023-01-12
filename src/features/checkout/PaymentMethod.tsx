import Heading from "@/components/heading/Heading";

export type PaymentMethodProps = {
  name: string;
  description?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function PaymentMethod({
  name,
  description,
  isActive,
  onClick,
}: PaymentMethodProps) {
  let className =
    (isActive ? "bg-gray-100" : "bg-gray-50 opacity-50 cursor-pointer") +
    " p-2 rounded-sm";

  return (
    <div className={className} onClick={onClick}>
      <Heading as="h6" size="lg">
        {name}
      </Heading>
      {description}
    </div>
  );
}
