import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const FieldTypeInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name, ...rest }, ref) => {
    return (
      <input
        className="h-11 font-normal text-sm bg-transparent border outline-none rounded-lg px-4 py-[1.375rem] placeholder-white"
        type={type}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  }
);

FieldTypeInput.displayName = "FieldTypeInput";
