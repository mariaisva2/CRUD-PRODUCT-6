"use client";
import styled from "styled-components"
import TableRow from "./TableRow";
import { TableData } from "../types/interfaceTable";
import TableHeader from "./TableHead"

const TableContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h3`
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TableStyle = styled.table`
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  border-collapse: collapse;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const Table: React.FC<TableData> = ({ data, setDataToEdit, deleteData}) => {//Define el componente `table` como un componente funcional de React con el tipo `TableData`
    return (
        <TableContainer>
            <Title>Tabla de productos</Title>
            <TableStyle>
              <TableHeader/>
                <tbody>
                    {data.length > 0 ? (//Se realiza un condicional para verificar si hay datos en el array de data.
                        data.map((product) => (//Si hay datos recorre el array y va a renderizar los datos de cada fila.
                          <TableRow
                          key={product.id}
                          product={product}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                        />
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={5}>Sin datos</Td>
                        </Tr>
                    )}
                </tbody>
            </TableStyle>
        </TableContainer>
    )
};

export default Table;