import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonCustom } from "@/components/form/ButtonCustom";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

export const AdminFormSubmitButton = (props: Props) => {
  const { title, className, disabled, ...rest } = props;
  return (
    <ButtonCustom
      className={clsx(
        "0 rounded-lg py-2",
        "h-full w-full",
        disabled
          ? "!cursor-not-allowed bg-gray-300"
          : "bg-brand-50 hover:!scale-[1.02]",
        className,
      )}
      type="submit"
      {...rest}
    >
      <p>{title}</p>
    </ButtonCustom>
  );
};
