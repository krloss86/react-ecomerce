import React from 'react'
import { useSelector } from 'react-redux'

export const CarritoTotal = () => {
    const carritoReducer = useSelector(
        (state) => state.carrito
    )
    return (

        <>
            <td></td>
                <td></td>
                <td></td>
                <td><strong>Total</strong></td>
                <td className="text-right">
                    <strong>
                        <b>$</b>
                        {
                            //[].reduce()
                            carritoReducer.items.reduce( (x,y) => x + (parseInt(y.item.price) * y.cantidad), 0)
                        }
                    </strong>
            </td>
        </>
    )
}
