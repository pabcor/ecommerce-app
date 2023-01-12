import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

type InputProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<UnPackAsyncDefaultValues<TFieldValues>>
> = {
  className: string;
  labelText: string;
  label: TFieldName;
  register: UseFormRegister<TFieldValues>;
  options?: RegisterOptions<TFieldValues, TFieldName>;
  error?: FieldError;
};

const Input = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<UnPackAsyncDefaultValues<TFieldValues>>
>({
  className,
  labelText,
  label,
  register,
  options = {},
  error,
}: InputProps<TFieldValues, TFieldName>) => (
  <>
    <label className={className} htmlFor={label}>
      {labelText}
      <input
        className="bg-gray-50 border-b rounded-sm text-black/70 py-1.5 px-1 w-full hover:outline-indigo-500 focus:outline-indigo-500"
        type={options && options.valueAsNumber ? "number" : "text"}
        defaultValue=""
        {...register(label, options)}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </label>
  </>
);

export default Input;
