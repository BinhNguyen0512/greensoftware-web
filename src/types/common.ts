/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

export interface ApiResponse<T> {
  data: T;
  status: number;
}
export interface ErrorResponse {
  errors?: Record<string, string>;
  status: number;
  message?: string;
}

export interface Column {
  title: string;
  value: string;
  render?: (value: number | string) => ReactNode;
}
