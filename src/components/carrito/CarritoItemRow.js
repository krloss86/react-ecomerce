import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCarrito, updateCarrito } from '../../redux/states/carrito';

export const CarritoItemRow = (props) => {
    const { item } = props;
    console.log(props);
    const [cantidad, setCantidad] = useState(item.cantidad)

    const dispath = useDispatch();

    const updateCantidad = (e) => {
        e.preventDefault();
        
        let newCantidad = e.target.value;

        if (newCantidad < 0) {
            newCantidad = 0;
        }

        if (newCantidad > 999) {
            newCantidad = 999;
        }

        setCantidad(newCantidad);//no pongo nada en useEffect porque no quiero renderizar nada

        dispath(updateCarrito({
            item: item.item,
            cantidad: newCantidad
        }));
    }

    const eliminarItem = () => {

        if (window.confirm('¿Eliminar Item?')) {
            dispath(removeCarrito({
                item: item.item,
                cantidad: 0
            }));
        }
    }

    return (
        <>
            <tr>
                <td>
                    <img src={item.item.image}
                    width={50}
                    alt='img' />
                </td>
                <td>
                    {item.item.title}
                </td>
                <td>
                    <input className="form-control"
                        type="number"
                        value={cantidad}
                        onChange={(e) => updateCantidad(e)} />
                </td>
                <td className="text-right">
                    {item.item.price}
                </td>
                <td className="text-right">
                    {/* <button className="btn btn-sm btn-primary btnActualizar" onClick={() => updateCantidad(cantidad)}>
                        <i className="bi bi-arrow-clockwise"></i>
                    </button> */}
                    <button className="btn btn-sm btn-danger btnEliminar" onClick={() => eliminarItem()}>
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}
