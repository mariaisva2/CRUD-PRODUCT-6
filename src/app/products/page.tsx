"use client";
import React, { useState, useEffect } from "react";
import Card from "../_components/card";
import { getProducts } from "../_components/GetProducts";  
import { IProduct } from "../types/interfaceProduct";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 40px;
`;

const H2 = styled.h2`
  margin-top: 25px;
  text-align: center;
  color: black;
`

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <H2>Productos</H2>
      <Div>
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </Div>
    </div>
  );
};

export default ProductsPage;




