import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
  alias: yup.string().trim().required("Alias is required"),
  price: yup
    .number()
    .transform((currentValue, originalValue) =>
      originalValue === "" ? null : currentValue,
    )
    .required("Price is required")
    .min(1, "Price must be greater than 0"),
  description: yup.string().trim().required("Description is required"),
  shortDescription: yup
    .string()
    .trim()
    .required("Short description is required"),
  stock: yup
    .number()
    .transform((currentValue, originalValue) =>
      originalValue === "" ? null : currentValue,
    )
    .required("Stock is required")
    .min(1, "Stock must be greater than 0"),
});
