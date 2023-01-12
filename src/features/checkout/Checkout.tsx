import { getItem, setItem } from "@/utils/local-storage.util";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CheckoutContainer } from "./CheckoutContainer";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutFormContainer } from "./CheckoutFormContainer";
import { CheckoutOrderPreview } from "./CheckoutOrderPreview";
import { CustomerInfo, ivaConditions } from "./CustomerInfo";
import { PaymentMethodList } from "./PaymentMethodList";
import { branches, provinces, ShipmentInfo } from "./ShipmentInfo";
import { ShipmentMethodList } from "./ShipmentMethodList";

export type CheckoutValues = {
  paymentMethod: number;
  shipmentMethod: number;
  firstName: string;
  lastName: string;
  email: string;
  documentNumber: string | number;
  ivaCondition: number;
  streetName: string;
  streetHeight: string | number;
  city: string;
  locality: string;
  province: number;
  postalCode: string | number;
  branch: number;
  selectBranch: boolean;
  hasShippingFee: boolean;
};

const checkoutSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required("El nombre es obligatorio")
      .test(
        "len",
        "El nombre es muy corto",
        (val) => val != null && val.length >= 3
      )
      .test(
        "len",
        "El nombre es muy largo",
        (val) => val != null && val.length <= 50
      ),
    lastName: yup
      .string()
      .required("El apellido es obligatorio")
      .test(
        "len",
        "El apellido es muy corto",
        (val) => val != null && val.length >= 3
      )
      .test(
        "len",
        "El apellido es muy largo",
        (val) => val != null && val.length <= 50
      ),
    email: yup
      .string()
      .required("El correo electrónico es obligatorio")
      .email("El correo electrónico es inválido"),
    documentNumber: yup
      .number()
      .typeError("El documento debe ser un número")
      .required("El número de documento es obligatorio")
      .test(
        "len",
        "El número de documento debe tener al menos 8 dígitos",
        (val) => val != null && val.toString().length >= 8
      )
      .test(
        "len",
        "El número de documento no debe exceder los 11 dígitos",
        (val) => val != null && val.toString().length <= 11
      ),
    ivaCondition: yup
      .number()
      .oneOf(
        ivaConditions.map((conidition) => conidition.value),
        "Debe seleccionar una condición ante el IVA"
      )
      .required("Debe seleccionar una condición ante el IVA"),
    streetName: yup
      .string()
      .required("La calle es obligatoria")
      .test(
        "len",
        "La calle es muy corta",
        (val) => val != null && val.length >= 3
      )
      .test(
        "len",
        "La calle es muy larga",
        (val) => val != null && val.length <= 50
      ),
    streetHeight: yup
      .number()
      .typeError("La altura debe ser un número")
      .required("La altura es obligatoria")
      .test(
        "len",
        "La altura debe tener al menos 2 dígitos",
        (val) => val != null && val.toString().length >= 2
      )
      .test(
        "len",
        "La altura no debe exceder los 6 dígitos",
        (val) => val != null && val.toString().length <= 6
      ),
    city: yup
      .string()
      .required("La ciudad es obligatoria")
      .test(
        "len",
        "La ciudad es muy corta",
        (val) => val != null && val.length >= 3
      )
      .test(
        "len",
        "La ciudad es muy larga",
        (val) => val != null && val.length <= 50
      ),
    locality: yup
      .string()
      .test(
        "len",
        "La localidad es muy corta",
        (val) => val != null && val.length >= 3
      )
      .test(
        "len",
        "La localidad es muy larga",
        (val) => val != null && val.length <= 50
      ),
    postalCode: yup
      .number()
      .typeError("El código postal debe ser un número")
      .required("El código postal es obligatorio")
      .test(
        "len",
        "El código postal debe tener al menos 4 dígitos",
        (val) => val != null && val.toString().length >= 4
      )
      .test(
        "len",
        "El código postal no debe exceder los 6 dígitos",
        (val) => val != null && val.toString().length <= 6
      ),
    province: yup
      .number()
      .required("Debe seleccionar una provincia")
      .oneOf(
        provinces.map((province) => province.value),
        "Debe seleccionar una provincia"
      ),
    branch: yup
      .number()
      .required("Debe seleccionar una sucursal")
      .oneOf(
        branches.map((branch) => branch.value),
        "Debe seleccionar una sucursal"
      ),
  })
  .required();

export function Checkout() {
  const isInitialMount = useRef(true);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<CheckoutValues>({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 1,
      shipmentMethod: 1,
      firstName: "",
      lastName: "",
      email: "",
      documentNumber: "",
      ivaCondition: 0,
      streetName: "",
      streetHeight: "",
      city: "",
      locality: "",
      province: 0,
      postalCode: "",
      branch: 0,
      selectBranch: false,
      hasShippingFee: false,
    },
  });

  const paymentMethodRef = createRef<HTMLDivElement>();
  const shipmentMethodRef = createRef<HTMLDivElement>();
  const customerInfoRef = createRef<HTMLDivElement>();

  const values = watch();

  useEffect(() => {
    const item = getItem<CheckoutValues>("checkoutForm");

    if (item) {
      reset(item);
    }
  }, []);

  watch(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setItem<CheckoutValues>("checkoutForm", getValues());
  });

  return (
    <CheckoutForm handleSubmit={handleSubmit}>
      <CheckoutContainer>
        <CheckoutFormContainer>
          <PaymentMethodList
            ref={paymentMethodRef}
            shipmentMethodRef={shipmentMethodRef}
            setValue={setValue}
            value={values.paymentMethod}
          />
          <ShipmentMethodList
            ref={shipmentMethodRef}
            customerInfoRef={customerInfoRef}
            setValue={setValue}
            value={values.shipmentMethod}
          />
          <CustomerInfo
            ref={customerInfoRef}
            register={register}
            errors={errors}
          />
          <ShipmentInfo
            register={register}
            errors={errors}
            selectBranch={values.selectBranch}
            hasShippingFee={values.hasShippingFee}
          />
        </CheckoutFormContainer>

        <CheckoutOrderPreview />
      </CheckoutContainer>
    </CheckoutForm>
  );
}
