import { ApiResponse } from "@/types/common";
import { CreateProductDTO } from "@/types/product/dto";
import { ProductType } from "@/types/product/response";

import axiosClient from "..";

const URL = "/api/v1/product";

export const productServices = {
  createProduct: (form: CreateProductDTO): Promise<ApiResponse<ProductType>> =>
    axiosClient.post(URL, form),
  getProductDetailById: (
    productId: string,
  ): Promise<ApiResponse<ProductType>> =>
    axiosClient.get(`${URL}/${productId}`),
  updateProduct: (
    productId: string,
    form: CreateProductDTO,
  ): Promise<ApiResponse<ProductType>> =>
    axiosClient.put(`${URL}/${productId}`, form),
  getAllProduct: (): Promise<ApiResponse<ProductType[]>> =>
    axiosClient.get(URL),
  deleteProduct: async (productId: string): Promise<ApiResponse<ProductType>> =>
    axiosClient.delete(`${URL}/${productId}`),
};
