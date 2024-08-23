"use client";

import React, { FormEvent, MouseEvent, useState, useEffect } from 'react';
import styled from "styled-components";
import Loader from "./Loader";
import { IProduct } from "../types/interfaceProduct";
import { CreateFormProps, IProductError } from "../types/interfaceProduct";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const Div = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  padding: 15px;
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  font-size: 15pt;
`;

const Inputs = styled.input`
  border-radius: 10px;
  border: 1px #ccc solid;
  padding: 7px;
  font-size: small;
  color: black;
  font-family: ${quicksand};
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 1px green solid;
  color: green;
  cursor: pointer;
  background: none;
  padding: 5px 10px;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const P = styled.p`
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const initialForm: IProduct = {
  id: 0,    
  title: "",
  description: "",
  price: 0,
  image: "",
};

const CreateForm: React.FC<CreateFormProps> = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState<IProduct>(initialForm);
  const [errors, setErrors] = useState<IProductError>({} as IProductError);
  const [loading, setLoading] = useState(false);  

  const validationsForm = (form: IProduct): IProductError => {
    let errors: IProductError = {} as IProductError;
    let regexDescription = /^.{1,255}$/;

    if (!form.title.trim()) {
      errors.title = "El campo 'Nombre' es requerido";
    } 
    if (!form.description.trim()) {
      errors.description = "El campo 'Descripción' es requerido";
    } else if (!regexDescription.test(form.description.trim())) {
      errors.description = "El campo 'Descripción' no debe exceder los 255 caracteres";
    }

    if (!form.price) {
      errors.price = "El campo 'Precio' es requerido";
    } 

    if (!form.image.trim()) {
        errors.image = "El campo 'Imagen' es requerido";
    } 

    return errors;
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validationsForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (form.id === 0 || form.id === undefined) {
        createData(form);
      } else {
        updateData(form);
        setDataToEdit(null); 
      }
      handleReset(e);
    }
  };

  const handleReset = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <main>
      <Title>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</Title>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Inputs
            className={quicksand.className}
            type="text"
            name="title"
            placeholder="Escribe el nombre del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.title}
            required
          />
          {errors.title && <P>{errors.title}</P>}
          <Inputs
            className={quicksand.className}
            type="text"
            name="description"
            placeholder="Escribe la descripción del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.description}
            required
          />
          {errors.description && <P>{errors.description}</P>}
          <Inputs
            className={quicksand.className}
            type="number"
            name="price"
            placeholder="Escribe el precio del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.price}
            required
          />
          {errors.price && <P>{errors.price}</P>}
          <Inputs
            className={quicksand.className}
            type="text"
            name="image"
            placeholder="Carga la URL del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.image}
            required
          />
          {errors.image && <P>{errors.image}</P>}
          <DivButton>
            <Button className={quicksand.className} type="submit">Enviar</Button>
            <Button  className={quicksand.className} type="reset" value="Limpiar" onClick={handleReset}>Limpiar</Button>
          </DivButton>
        </Form>
        {loading && <Loader />}
      </Div>
    </main>
  );
};

export default CreateForm;
