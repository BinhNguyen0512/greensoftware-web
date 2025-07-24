import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { handleAxiosFormError } from "@/helpers/handleAxiosError";
import { productServices } from "@/services/product";
import { CreateProductDTO } from "@/types/product/dto";

import { validationSchema } from "../../validationSchema";

export const useCreateProduct = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm<CreateProductDTO>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: CreateProductDTO) => {
    try {
      setIsLoading(true);
      await productServices.createProduct(data);
      reset();
    } catch (error) {
      handleAxiosFormError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    reset();
  };

  return { handleSubmit, control, errors, onSubmit, handleReset, isLoading };
};
