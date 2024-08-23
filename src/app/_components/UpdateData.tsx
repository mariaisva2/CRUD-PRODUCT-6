import { getProducts } from "./GetProducts";
import { IProduct } from "../types/interfaceProduct";

export function updateData(updatedProduct: IProduct): void {
  try {
    // Obtener los productos actuales
    const products = getProducts();

    // Encontrar el índice del producto que se va a actualizar
    const index = products.findIndex(product => product.id === updatedProduct.id);

    if (index !== -1) {
      // Reemplazar el producto existente con el producto actualizado
      products[index] = updatedProduct;
      localStorage.setItem('products', JSON.stringify(products));
 
    } else {
      console.error('Product not found en updateData');
    }
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
  }
}
