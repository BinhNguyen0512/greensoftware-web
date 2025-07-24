"use client";

import { TableCustom } from "@/components/ui/TableCustom";
import { ConvertPrice } from "@/helpers/convertPrice";
import { Column } from "@/types/common";
import { ProductType } from "@/types/product/response";

import { AdminButton } from "./components/form/button/AdminButton";
import { ProductFormLayout } from "./components/ui/ProductFormLayout";
import { useProductList } from "./hooks/useProductList";

const productColumns: Column[] = [
  { title: "Title", value: "title" },
  { title: "Alias", value: "alias" },
  {
    title: "Price",
    value: "price",
    render: (value) => ConvertPrice(Number(value)),
  },
  { title: "Stock", value: "stock" },
];

const ProductPage = () => {
  const {
    isLoading,
    productList,
    handleDelete,
    handleEdit,
    handleAddProduct,
    isLoadingDelete,
  } = useProductList();

  return (
    <ProductFormLayout
      title="Danh sách sản phẩm"
      renderProductForm={
        <div className="flex flex-col gap-4">
          <div className="w-40">
            <AdminButton
              className="bg-green-800 text-white"
              onClick={handleAddProduct}
            >
              + Thêm sản phẩm
            </AdminButton>
          </div>

          {isLoading ? (
            <p>Dữ liệu đang tải...</p>
          ) : (
            <TableCustom<ProductType>
              columns={productColumns}
              data={productList}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isLoadingDelete={isLoadingDelete}
            />
          )}

          <p className="text-md text-center">
            Danh sách sản phẩm trong hệ thống
          </p>
        </div>
      }
    />
  );
};

export default ProductPage;
