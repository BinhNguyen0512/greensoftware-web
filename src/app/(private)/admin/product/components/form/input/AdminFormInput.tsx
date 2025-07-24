"use client";

import { Combobox, InputProps, Label } from "@headlessui/react";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

import { AdminTextInput } from "./AdminTextInput";

interface Props<T extends FieldValues> extends InputProps {
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  errors?: string;
  disabled?: boolean;
  label?: string;
}

export const AdminFormInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, defaultValue, errors, disabled, label, ...rest } =
    props;

  const [value, setValue] = useState<string>("");

  return (
    <Combobox value={value} disabled={disabled}>
      {label && <Label className={"text-md mb-2 font-medium"}>{label}</Label>}

      <div className="relative w-full">
        <Controller
          name={name}
          defaultValue={defaultValue}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <AdminTextInput
                value={value}
                onChange={(event) => {
                  const valueInput = event.target.value;
                  onChange(valueInput);

                  setValue(valueInput);
                }}
                {...rest}
              />
            );
          }}
        />
      </div>
      {errors && errors != "" ? (
        <p className="text-red-60 mt-1 mb-2 text-xs">{errors}</p>
      ) : (
        <></>
      )}
    </Combobox>
  );
};
