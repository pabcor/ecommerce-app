import Heading from "@/components/heading/Heading";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { forwardRef } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { CheckoutValues } from "./Checkout";

export const ivaConditions = [
  { key: "Responsable Inscripto", value: 1 },
  { key: "Exento", value: 2 },
];

export type CustomerInfoProps = {
  register: UseFormRegister<CheckoutValues>;
  errors: Partial<FieldErrorsImpl<CheckoutValues>>;
};

export const CustomerInfo = forwardRef<
  HTMLDivElement | null,
  CustomerInfoProps
>(function CustomerInfo({ register, errors }, ref) {
  return (
    <div ref={ref} className="flex flex-col gap-4">
      <Heading as="h5" size="xl">
        3. Información personal
      </Heading>
      <div className="flex gap-2">
        <Input<CheckoutValues, "firstName">
          className="flex flex-col gap-1 w-1/2"
          label="firstName"
          labelText="Nombre*"
          register={register}
          options={{
            required: true,
          }}
          error={errors.firstName}
        />

        <Input<CheckoutValues, "lastName">
          className="flex flex-col gap-1 w-1/2"
          label="lastName"
          labelText="Apellido*"
          register={register}
          options={{
            required: true,
          }}
          error={errors.lastName}
        />
      </div>

      <Input<CheckoutValues, "email">
        className="flex flex-col gap-1"
        label="email"
        labelText="Correo electrónico*"
        register={register}
        options={{
          required: true,
        }}
        error={errors.email}
      />

      <Input<CheckoutValues, "documentNumber">
        className="flex flex-col gap-1"
        label="documentNumber"
        labelText="Número de documento*"
        register={register}
        options={{
          required: true,
          valueAsNumber: true,
        }}
        error={errors.documentNumber}
      />

      <Select<CheckoutValues, "ivaCondition">
        className="flex flex-col gap-1"
        label="ivaCondition"
        labelText="Condición ante el IVA*"
        register={register}
        options={{
          required: true,
        }}
        error={errors.ivaCondition}
        list={ivaConditions}
      />
    </div>
  );
});
