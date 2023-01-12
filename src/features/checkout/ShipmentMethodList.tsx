import { forwardRef, RefObject } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutValues } from "./Checkout";
import { ShipmentMethod } from "./ShipmentMethod";
import Heading from "@/components/heading/Heading";

export type ShipmentMethod = {
  id: number;
  name: string;
  description?: string;
  hasShippingFee?: boolean;
  selectBranch?: boolean;
};

const shipmentMethods: ShipmentMethod[] = [
  {
    id: 1,
    name: "Recoge en Local",
    description:
      "Cras ultricies dui quam, facilisis consequat tellus interdum eget. Nunc eu commodo lacus.",
  },
  {
    id: 2,
    name: "Andreani - Domicilio",
    description:
      "Cras ultricies dui quam, facilisis consequat tellus interdum eget. Nunc eu commodo lacus.",
    hasShippingFee: true,
  },
  {
    id: 3,
    name: "Andreani - Sucursal",
    description:
      "Cras ultricies dui quam, facilisis consequat tellus interdum eget. Nunc eu commodo lacus.",
    hasShippingFee: true,
    selectBranch: true,
  },
];

export type ShipmentMethodListProps = {
  customerInfoRef: RefObject<HTMLDivElement>;
  setValue: UseFormSetValue<CheckoutValues>;
  value: number;
};

export const ShipmentMethodList = forwardRef<
  HTMLDivElement | null,
  ShipmentMethodListProps
>(function ShipmentMethodList({ customerInfoRef, setValue, value }, ref) {
  const onClick = (index: number) => () => {
    const { id, selectBranch, hasShippingFee } = shipmentMethods[index];

    setValue("shipmentMethod", id);
    setValue("selectBranch", selectBranch || false);
    setValue("hasShippingFee", hasShippingFee || false);

    if (typeof ref !== "function") {
      customerInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <Heading as="h5" size="xl">
        2. Forma de envío
      </Heading>
      {shipmentMethods.map((method, index) => {
        return (
          <ShipmentMethod
            name={method.name}
            description={method.description}
            isActive={shipmentMethods[index].id === value}
            onClick={onClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
});
