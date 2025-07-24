import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  handleAxiosFormError,
  handleAxiosMessageError,
} from "@/helpers/handleAxiosError";
import { productServices } from "@/services/product";
import { CreateProductDTO } from "@/types/product/dto";
import { ProductType } from "@/types/product/response";

import { validationSchema } from "../../validationSchema";

const initialProductDetail = {
  title: "",
  alias: "",
  price: 0,
  description: "",
  shortDescription: "",
  stock: 0,
  id: "",
  createdAt: "",
  updatedAt: "",
};

export const useEditProduct = () => {
  const { id: productId } = useParams<{ id: string }>();

  const [isLoadingUpdate, setIsLoadingUpdate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [productDetail, setProductDetail] =
    useState<ProductType>(initialProductDetail);

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

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const response = await productServices.getProductDetailById(productId);

        const productDetail = response.data;

        handleProductData(productDetail);
      } catch (error) {
        handleAxiosMessageError(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetProduct();
  }, []);

  const onSubmit = async (data: CreateProductDTO) => {
    try {
      setIsLoadingUpdate(true);

      const response = await productServices.updateProduct(productId, data);

      const updateProductData: ProductType = response.data;

      handleProductData(updateProductData);
    } catch (error) {
      handleAxiosFormError(error, setError);
    } finally {
      setIsLoadingUpdate(false);
    }
  };

  const handleProductData = (product: ProductType) => {
    reset(product);
    setProductDetail(product);
  };

  const handleReset = () => {
    handleProductData(productDetail);
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    isLoadingUpdate,
    errors,
    isLoading,
    handleReset,
  };
};
