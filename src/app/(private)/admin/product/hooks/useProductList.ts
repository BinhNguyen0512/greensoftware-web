import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { handleFilter } from "@/helpers/filter";
import { productServices } from "@/services/product";
import { ProductType } from "@/types/product/response";

export const useProductList = () => {
  const router = useRouter();
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const response = await productServices.getAllProduct();

        const productList: ProductType[] = response.data;

        setProductList(productList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetProduct();
  }, []);

  const handleEdit = (item: ProductType) => {
    router.push(`/admin/product/${item.id}`);
  };

  const handleDelete = async (item: ProductType) => {
    try {
      setIsLoadingDelete(true);
      const response = await productServices.deleteProduct(item.id);

      const productDelete: ProductType = response.data;

      const updateProductList = handleFilter(productList, productDelete.id);

      setProductList(updateProductList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(true);
    }
  };

  return { productList, isLoading, handleEdit, handleDelete, isLoadingDelete };
};
