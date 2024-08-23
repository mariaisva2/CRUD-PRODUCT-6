import React from "react";
import {ButtonProps} from "../types/interfaceButton"

const Button: React.FC<ButtonProps> = ({onClick, label, className}) => {
    return (
    <button className={className} onClick={onClick}>
        {label}
    </button>)
}

export default Button