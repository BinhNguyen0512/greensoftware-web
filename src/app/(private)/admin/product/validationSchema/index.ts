import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup.string().trim().required("Vui lòng nhập tên sản phẩm"),
  alias: yup.string().trim().required("Vui lòng nhập alias"),
  price: yup
    .number()
    .transform((currentValue, originalValue) =>
      originalValue === "" ? null : currentValue,
    )
    .required("Vui lòng nhập số")
    .min(1, "Giá phải lớn hơn 1"),
  description: yup.string().trim().required("Vui lòng nhập chi tiết sản phẩm"),
  shortDescription: yup.string().trim().required("Vui lòng mô tả ngắn"),
  stock: yup
    .number()
    .transform((currentValue, originalValue) =>
      originalValue === "" ? null : currentValue,
    )
    .required("Vui lòng nhập số")
    .min(1, "Giá phải lớn hơn 1"),
});
