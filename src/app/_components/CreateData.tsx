import { IProduct } from "../types/interfaceProduct";
import { getProducts } from "./GetProducts";

export function createData(product: IProduct): boolean { 
    try {
        const products = getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        return true; 
    } catch (error) {
        console.error("Error al agregar el producto:", error);
        return false; 
    }
}

