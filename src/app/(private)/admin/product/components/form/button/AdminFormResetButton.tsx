import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonCustom } from "@/components/form/ButtonCustom";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const AdminFormResetButton = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <ButtonCustom
      className={clsx(
        "0 rounded-lg py-2",
        "hover:!scale-[1.02]",
        "h-full w-full",
        "bg-red-400",
        className,
      )}
      {...rest}
    >
      <p>Reset</p>
    </ButtonCustom>
  );
};
