export interface IProduct { // interface para la creación del nuevo producto.
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface TableData {
    data : IProduct[],
    setDataToEdit: (product: IProduct | null) => void;
    deleteData: (id: number) => void;
}

  export interface TableRowProducts {
    product : IProduct,
    setDataToEdit: (product: IProduct | null) => void;
    deleteData: (id: number) => void;
}