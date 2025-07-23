import { Button } from "@headlessui/react";
import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}

export const ButtonCustom = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <Button
      className={clsx(
        "cursor-pointer transition-all duration-300 hover:scale-[1.05]",
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};
