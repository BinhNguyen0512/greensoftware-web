import { Input, InputProps } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props extends InputProps {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  wrapperClassName?: string;
}

const InputCustom = (props: Props) => {
  const { prefixIcon, suffixIcon, wrapperClassName, className, ...rest } =
    props;
  return (
    <div className={clsx(wrapperClassName)}>
      {prefixIcon}

      <Input
        {...rest}
        className={clsx("w-full outline-none", "bg-transparent", className)}
      />

      {suffixIcon}
    </div>
  );
};

export default InputCustom;
