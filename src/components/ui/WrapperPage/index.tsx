import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  classnameWrapper?: string;
}

export const WrapperPage = (props: Props) => {
  const { children, classnameWrapper = "" } = props;

  return (
    <div className={clsx(`px-4 lg:px-0`, classnameWrapper)}>
      <div className={`h-full w-full lg:px-[60px] xl:px-[72px]`}>
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};
