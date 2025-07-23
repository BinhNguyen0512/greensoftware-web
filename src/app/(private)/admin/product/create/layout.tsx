import { Metadata } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Create",
};

const CreatePageLayout = async (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};

export default CreatePageLayout;
