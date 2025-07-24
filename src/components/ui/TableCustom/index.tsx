import React from "react";

import { AdminButton } from "@/app/(private)/admin/product/components/form/button/AdminButton";
import { Column } from "@/types/common";

interface TableProps<T> {
  columns: Column[];
  data: T[];
  // eslint-disable-next-line no-unused-vars
  onEdit?: (item: T) => void;
  // eslint-disable-next-line no-unused-vars
  onDelete?: (item: T) => void;
  isLoadingDelete?: boolean;
}

export const TableCustom = <T extends Record<string, any>>(
  props: TableProps<T>,
) => {
  const { columns, data, onDelete, onEdit, isLoadingDelete } = props;

  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          {columns.map((col) => (
            <th key={col.value} className="border-b p-2">
              {col.title}
            </th>
          ))}
          <th className="border-b p-2">Edit</th>
          <th className="border-b p-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.value} className="border-b p-2">
                {col.render ? col.render(row[col.value]) : row[col.value]}
              </td>
            ))}

            {onEdit && (
              <td className="space-x-2 border-b p-2">
                <AdminButton
                  className="bg-blue-500"
                  onClick={() => onEdit(row)}
                >
                  Edit
                </AdminButton>
              </td>
            )}

            {onDelete && (
              <td className="space-x-2 border-b p-2">
                <AdminButton
                  className="bg-red-500"
                  onClick={() => onDelete(row)}
                  disabled={isLoadingDelete}
                >
                  Delete
                </AdminButton>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
