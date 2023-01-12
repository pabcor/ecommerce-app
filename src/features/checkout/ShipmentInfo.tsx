import Heading from "@/components/heading/Heading";
import Button from "@/components/button/Button";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CheckoutValues } from "./Checkout";

export const branches = [
  { key: "Sucursal 1", value: 1 },
  { key: "Sucursal 2", value: 2 },
];

export const provinces = [
  { key: "Capital Federal", value: 1 },
  { key: "Buenos Aires", value: 2 },
  { key: "Catamarca", value: 3 },
  { key: "Chaco", value: 4 },
  { key: "Chubut", value: 5 },
  { key: "Córdoba", value: 6 },
  { key: "Corrientes", value: 7 },
  { key: "Entre Ríos", value: 8 },
  { key: "Formosa", value: 9 },
  { key: "Jujuy", value: 10 },
  { key: "La Pampa", value: 11 },
  { key: "La Rioja", value: 12 },
  { key: "Mendoza", value: 13 },
  { key: "Misiones", value: 14 },
  { key: "Neuquén", value: 15 },
  { key: "Río Negro", value: 16 },
  { key: "Salta", value: 17 },
  { key: "San Juan", value: 18 },
  { key: "San Luis", value: 19 },
  { key: "Santa Cruz", value: 20 },
  { key: "Santa Fe", value: 21 },
  { key: "Santiago del Estero", value: 22 },
  { key: "Tierra del Fuego", value: 23 },
  { key: "Tucumán", value: 24 },
];

export type ShipmentInfoProps = {
  selectBranch?: boolean;
  hasShippingFee?: boolean;
  register: UseFormRegister<CheckoutValues>;
  errors: Partial<FieldErrorsImpl<CheckoutValues>>;
};

export function ShipmentInfo({
  selectBranch = false,
  hasShippingFee = false,
  register,
  errors,
}: ShipmentInfoProps) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <Heading as="h5" size="xl">
        4. Información de envío
      </Heading>
      {selectBranch ? (
        <div className="flex flex-col gap-2">
          <Input<CheckoutValues, "postalCode">
            className="flex flex-col gap-1"
            label="postalCode"
            labelText="Código Postal*"
            register={register}
            options={{
              required: true,
              valueAsNumber: true,
            }}
            error={errors.postalCode}
          />

          <Select<CheckoutValues, "branch">
            className="flex flex-col gap-1"
            label="branch"
            labelText="Sucursal*"
            register={register}
            options={{
              required: true,
            }}
            error={errors.branch}
            list={branches}
          />
        </div>
      ) : (
        <>
          <div className="flex gap-2">
            <Input<CheckoutValues, "streetName">
              className="flex flex-col gap-1 w-1/2"
              label="streetName"
              labelText="Calle*"
              register={register}
              options={{
                required: true,
              }}
              error={errors.streetName}
            />

            <Input<CheckoutValues, "streetHeight">
              className="flex flex-col gap-1 w-1/2"
              label="streetHeight"
              labelText="Altura*"
              register={register}
              options={{
                required: true,
                valueAsNumber: true,
              }}
              error={errors.streetHeight}
            />
          </div>

          <div className="flex gap-2">
            <Input<CheckoutValues, "city">
              className="flex flex-col gap-1 lg:w-1/3"
              label="city"
              labelText="Ciudad*"
              register={register}
              options={{
                required: true,
              }}
              error={errors.city}
            />

            <Input<CheckoutValues, "locality">
              className="flex flex-col gap-1 lg:w-1/3"
              label="locality"
              labelText="Localidad"
              register={register}
              error={errors.locality}
            />

            <Select<CheckoutValues, "province">
              className="flex flex-col gap-1 lg:w-1/3"
              label="province"
              labelText="Provincia*"
              register={register}
              options={{
                required: true,
              }}
              error={errors.province}
              list={provinces}
            />
          </div>

          <Input<CheckoutValues, "postalCode">
            className="flex flex-col gap-1"
            label="postalCode"
            labelText="Código Postal*"
            register={register}
            options={{
              required: true,
              valueAsNumber: true,
            }}
            error={errors.postalCode}
          />
        </>
      )}
      {hasShippingFee && <Button>Calcular costo de envío</Button>}
    </div>
  );
}
