"use client";

import { AdminFormResetButton } from "../components/form/button/AdminFormResetButton";
import { AdminFormSubmitButton } from "../components/form/button/AdminFormSubmitButton";
import { ProductForm } from "../components/ui/ProductForm";
import { ProductFormLayout } from "../components/ui/ProductFormLayout";
import { useCreateProduct } from "./hooks/useCreateProduct";

const CreateProductPage = () => {
  const { control, errors, handleSubmit, onSubmit, handleReset, isLoading } =
    useCreateProduct();

  return (
    <ProductFormLayout
      title="Create Product Page"
      renderProductForm={
        <ProductForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          renderButton={
            <div className="flex w-full gap-4">
              <AdminFormResetButton onClick={handleReset} />

              <AdminFormSubmitButton title="Submit" disabled={isLoading} />
            </div>
          }
        />
      }
    />
  );
};

export default CreateProductPage;
