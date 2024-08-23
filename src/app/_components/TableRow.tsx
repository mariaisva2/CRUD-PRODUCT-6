"use client"
import styled from "styled-components";
import { TableRowProducts} from "../types/interfaceTable";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const Td = styled.td`
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

// Estilos para las imágenes en la tabla
const Img = styled.img`
  width: 50%;
  height: 75px;
  object-fit: cover;
`;

const EditButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid orange;
  margin: 5px;
  color: orange;
  border-radius: 10px;
  padding: 5px 10px;

  &:hover {
    background-color: orange;
    color: white;
}
`

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid red;
  margin: 5px;
  color: red;
  border-radius: 10px;
  padding: 5px 10px;

  &:hover {
    background-color: red;
    color: white;
}
`

const Tr = styled.tr`
  text-align: center;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableRow: React.FC<TableRowProducts> = ({ product, setDataToEdit, deleteData }) => {
    let { id, title, description, price, image} = product;

    return (
        <Tr>
            <Td>{title}</Td>
            <Td>{description}</Td>
            <Td>${price}</Td>
            <Td><Img src={image} alt={title}/></Td>

            <Td>
                <EditButton className={quicksand.className} onClick={() => setDataToEdit(product)}>Editar</EditButton>
                <DeleteButton className={quicksand.className} onClick={() => deleteData(id)}>Eliminar</DeleteButton>
            </Td>
        </Tr>
    );
};

export default TableRow;