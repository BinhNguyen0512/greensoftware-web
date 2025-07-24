import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { AdminButton } from "./AdminButton";

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
    <AdminButton
      className={clsx(
        disabled
          ? "!cursor-not-allowed bg-gray-300 hover:!scale-0"
          : "bg-brand-500 hover:!scale-[1.02]",
        className,
      )}
      type="submit"
      {...rest}
    >
      <p className="text-white">{title}</p>
    </AdminButton>
  );
};
