import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: React.ReactNode;
  className: string;
}

const Input = ({ label, suffix, className, ...rest }: Props) => {
  return (
    <div className={clsx("flex flex-col gap-2 relative")}>
      {label && <label>{label}</label>}
      <input {...rest} className={clsx(className, "text-2xl")} />
      {suffix}
    </div>
  );
};

export default Input;
