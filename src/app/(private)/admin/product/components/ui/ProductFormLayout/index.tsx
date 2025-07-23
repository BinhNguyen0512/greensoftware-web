import { ReactNode } from "react";

import { WrapperPage } from "@/components/ui/WrapperPage";

interface Props {
  title: string;
  renderProductForm: ReactNode;
}

export const ProductFormLayout = (props: Props) => {
  const { title, renderProductForm } = props;
  return (
    <main>
      <WrapperPage>
        <h1 className="pb-12">{title}</h1>

        {renderProductForm}
      </WrapperPage>
    </main>
  );
};
