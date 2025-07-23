import { InputProps } from "@headlessui/react";
import clsx from "clsx";

import InputCustom from "@/components/form/InputCustom";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends InputProps {}

export const AdminTextInput = (props: Props) => {
  return (
    <InputCustom
      placeholder={"Tìm kiếm sản phẩm"}
      className={"h-8 placeholder:relative lg:h-12 lg:placeholder:-z-10"}
      wrapperClassName={clsx(
        "relative flex w-full items-center gap-2",
        "rounded-2xl border-[2px] border-solid border-gray-400",
        "focus-within:border-brand-500 focus-within:shadow-lg",
        "transition-all duration-300",
        "px-2 py-1 lg:px-4 lg:py-2",
      )}
      {...props}
    />
  );
};
