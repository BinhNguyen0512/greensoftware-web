"use client";

import { WrapperPage } from "@/components/ui/WrapperPage";

import { AdminFormResetButton } from "../components/form/button/AdminFormResetButton";
import { AdminFormSubmitButton } from "../components/form/button/AdminFormSubmitButton";
import { CreateProductForm } from "../components/ui/ProductForm";
import { useCreateProduct } from "./hooks/useCreateProduct";

const CreateProductPage = () => {
  const { control, errors, handleSubmit, onSubmit, reset, isLoading } =
    useCreateProduct();
  return (
    <main>
      <WrapperPage>
        <h1 className="pb-12">Create Product Page</h1>

        <CreateProductForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          renderButton={
            <div className="flex w-full gap-4">
              <AdminFormResetButton
                onClick={() => {
                  reset();
                }}
              />

              <AdminFormSubmitButton title="Submit" disabled={isLoading} />
            </div>
          }
        />
      </WrapperPage>
    </main>
  );
};

export default CreateProductPage;
