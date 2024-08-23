import { getProducts } from "./GetProducts";

export function deleteData(productId: number): boolean {
    try {
        let products = getProducts();
        
        // Filtra el producto que se va a eliminar
        products = products.filter(product => product.id !== productId);
        
        localStorage.setItem('products', JSON.stringify(products));
        return true; // Indica éxito
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return false; // Indica fallo
    }
}
