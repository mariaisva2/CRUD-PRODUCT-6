export interface IProduct { // interface para la creación del nuevo producto.
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface IProductError { // interface que gestiona errores en la creación del producto.
    title: string;
    description: string;
    price: string;
    image: string;
}

export interface CreateFormProps { 
  createData: (product: IProduct) => void;
  updateData: (product: IProduct) => void;
  dataToEdit: IProduct | null;
  setDataToEdit: (data:IProduct | null) => void;
}

export interface CardProps{
  product: IProduct;
  }

