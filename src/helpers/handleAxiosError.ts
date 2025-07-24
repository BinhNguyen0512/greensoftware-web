import { AxiosError, isAxiosError } from "axios";
import { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";

import { ErrorResponse } from "@/types/common";

export const setErrorForm = <
  TFieldValues extends FieldValues,
  K extends FieldPath<TFieldValues>,
>(
  errors: Partial<Record<K, string>>,
  setError: UseFormSetError<TFieldValues>,
) => {
  if (!errors) return;

  for (let key in errors) {
    setError(key as K, { message: errors[key] });
  }
};

export const handleAxiosError = (error: unknown) => {
  if (!isAxiosError(error)) return;

  const axiosError: AxiosError<unknown, any> = error;
  const data = axiosError.response?.data as ErrorResponse;

  return data;
};

export const handleAxiosFormError = <TFieldValues extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<TFieldValues>,
) => {
  const data = handleAxiosError(error);
  const errors = data?.errors;

  if (!errors) return;

  setErrorForm(errors, setError);
};

export const handleAxiosMessageError = (error: unknown) => {
  const data = handleAxiosError(error);
  const message = data?.message;

  if (!message) return;

  console.log("Open message toast: ", message);
};
