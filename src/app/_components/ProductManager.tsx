'use client';
import React, { useEffect, useState } from "react";
import { getProducts } from "./GetProducts";
import CreateForm from "./CreateForm";
import Table from "./table";
import { IProduct } from "../types/interfaceProduct";
import { createData as createDataService } from "./CreateData";
import { deleteData as deleteDataService } from "./DeleteData";
import { updateData as updateDataService } from "./UpdateData";
import { toast } from "react-toastify";

const ProductManager = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [dataToEdit, setDataToEdit] = useState<IProduct | null>(null);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const createData = (newProduct: IProduct) => {
    try {
      newProduct.id = Date.now();
      createDataService(newProduct);
      setProducts(getProducts());
      toast.success("Producto creado exitosamente!");
    } catch (error) {
      toast.error("Error al crear el producto.");
    }
  };

  const updateData = (updatedProduct: IProduct) => {
    try {
      updateDataService(updatedProduct);
      setProducts(getProducts()); // Actualiza el estado después de actualizar
      toast.success("Producto actualizado exitosamente!");
    } catch (error) {
      toast.error("Error al actualizar el producto.");
    }
  };

  const deleteData = (id: number) => {
    try {
      deleteDataService(id);
      setProducts(getProducts()); // Actualiza el estado después de borrar
      toast.success("Producto eliminado exitosamente!");
    } catch (error) {
      toast.error("Error al eliminar el producto.");
    }
  };

  return (
    <div>
      <CreateForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit} 
      />
      <Table
        data={products} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}
      />
    </div>
  );
};

export default ProductManager;

