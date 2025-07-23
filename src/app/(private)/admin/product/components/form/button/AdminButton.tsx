import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { ButtonCustom } from "@/components/form/ButtonCustom";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}

export const AdminButton = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <ButtonCustom
      className={clsx(
        "0 rounded-lg py-2",
        "hover:!scale-[1.02]",
        "h-full w-full",
        className,
      )}
      type="submit"
      {...rest}
    >
      {children}
    </ButtonCustom>
  );
};
