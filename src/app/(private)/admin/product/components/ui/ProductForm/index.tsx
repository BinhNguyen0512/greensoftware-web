import { ReactNode } from "react";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

import { CreateProductDTO } from "@/types/product/dto";

import { AdminFormInput } from "../../form/input/AdminFormInput";

interface Props {
  control: Control<CreateProductDTO>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: CreateProductDTO) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<CreateProductDTO, CreateProductDTO>;
  errors: FieldErrors<CreateProductDTO>;
  renderButton: ReactNode;
}

export const ProductForm = (props: Props) => {
  const { control, errors, handleSubmit, onSubmit, renderButton } = props;

  return (
    <form onSubmitCapture={handleSubmit(onSubmit)}>
      <section className="mb-4">
        <AdminFormInput
          name="title"
          control={control}
          errors={errors.title?.message}
          label="Title"
          placeholder="Enter title"
          defaultValue={""}
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="alias"
          control={control}
          errors={errors.alias?.message}
          label="Alias"
          placeholder="Enter alias"
          defaultValue={""}
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="price"
          control={control}
          errors={errors.price?.message}
          label="Price"
          placeholder="Enter price"
          type="number"
          defaultValue={0}
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="description"
          control={control}
          errors={errors.description?.message}
          label="Description"
          placeholder="Enter description"
          defaultValue={""}
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="shortDescription"
          control={control}
          errors={errors.shortDescription?.message}
          label="Short description"
          placeholder="Enter short description"
          defaultValue={""}
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="stock"
          control={control}
          errors={errors.stock?.message}
          label="Stock"
          placeholder="Enter stock"
          type="number"
          defaultValue={0}
        />
      </section>

      {renderButton}
    </form>
  );
};
