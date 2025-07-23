import { CreateProductDTO } from "@/types/product/dto";

import axiosClient from "..";

const URL = "/api/v1/product";

export const productServices = {
  createProduct: (form: CreateProductDTO) => axiosClient.post(URL, form),
  getProductDetailById: (productId: string) =>
    axiosClient.get(`${URL}/${productId}`),
  updateProduct: (productId: string, form: CreateProductDTO) =>
    axiosClient.put(`${URL}/${productId}`, form),
};
