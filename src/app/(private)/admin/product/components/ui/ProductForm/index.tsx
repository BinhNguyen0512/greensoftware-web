import { ReactNode } from "react";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

import { CreateProductDTO } from "@/types/product/dto";

import { AdminFormInput } from "../../form/input/AdminFormInput";

interface Props {
  control: Control<CreateProductDTO, any>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: CreateProductDTO) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<CreateProductDTO, CreateProductDTO>;
  errors: FieldErrors<CreateProductDTO>;
  renderButton: ReactNode;
}

export const CreateProductForm = (props: Props) => {
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
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="alias"
          control={control}
          errors={errors.alias?.message}
          label="Alias"
          placeholder="Enter alias"
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
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="description"
          control={control}
          errors={errors.description?.message}
          label="Description"
          placeholder="Enter description"
        />
      </section>

      <section className="mb-4">
        <AdminFormInput
          name="shortDescription"
          control={control}
          errors={errors.shortDescription?.message}
          label="Short description"
          placeholder="Enter short description"
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
        />
      </section>

      {renderButton}
    </form>
  );
};
