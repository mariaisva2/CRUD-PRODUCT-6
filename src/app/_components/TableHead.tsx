import styled from "styled-components";

const Th = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export default function TableHeader(){
return(
  <thead>
  <Tr>
      <Th>Nombre</Th>
      <Th>Descripción</Th>
      <Th>Precio</Th>
      <Th>Imagen</Th>
      <Th>Acciones</Th>
  </Tr>
</thead>
   );
}