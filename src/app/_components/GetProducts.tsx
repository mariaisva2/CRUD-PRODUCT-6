'use client';
import { IProduct } from "../types/interfaceProduct";

export function getProducts(): IProduct[] {
    if (typeof window === 'undefined') return []; // En entorno de servidor

    try {
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : []; // Devuelve un array vacío si no hay productos
    } catch (error) {
        console.error("Error al obtener productos del localStorage:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}
