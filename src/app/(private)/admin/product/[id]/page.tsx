"use client";

import { AdminFormResetButton } from "../components/form/button/AdminFormResetButton";
import { AdminFormSubmitButton } from "../components/form/button/AdminFormSubmitButton";
import { ProductForm } from "../components/ui/ProductForm";
import { ProductFormLayout } from "../components/ui/ProductFormLayout";
import { useEditProduct } from "./hooks/useEditProduct";

const CreateProductPage = () => {
  const { control, errors, handleSubmit, isLoading, onSubmit, handleReset } =
    useEditProduct();
  return (
    <ProductFormLayout
      title="Edit Product Page"
      renderProductForm={
        isLoading ? (
          <p>Đang tải dữ liệu....</p>
        ) : (
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
        )
      }
    />
  );
};

export default CreateProductPage;
