import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

type SelectProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<UnPackAsyncDefaultValues<TFieldValues>>
> = {
  className: string;
  labelText: string;
  label: TFieldName;
  register: UseFormRegister<TFieldValues>;
  options?: RegisterOptions<TFieldValues, TFieldName>;
  error?: FieldError;
  list: { key: string; value: string | number }[];
};

const Select = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<UnPackAsyncDefaultValues<TFieldValues>>
>({
  className,
  labelText,
  label,
  register,
  options = {},
  error,
  list,
}: SelectProps<TFieldValues, TFieldName>) => (
  <>
    <label className={className} htmlFor={label}>
      {labelText}
      <select
        id={label}
        className="bg-gray-50 border-b rounded-sm text-black/70 py-1.5 px-1 w-full h-full"
        {...register(label, options)}
        defaultValue={0}
      >
        {[{ key: "Seleccioná", value: 0 }, ...list].map((item, index) => {
          return (
            <option value={item.value} key={index}>
              {item.key}
            </option>
          );
        })}
      </select>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </label>
  </>
);

export default Select;
