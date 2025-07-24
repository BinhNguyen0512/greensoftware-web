/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

export interface ErrorResponse {
  errors: Record<string, string>;
}

export interface Column {
  title: string;
  value: string;
  render?: (value: number | string) => ReactNode;
}
