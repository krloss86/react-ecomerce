import { useDispatch, useSelector } from "react-redux";
import { resetMensaje } from "../../redux/states/mensaje";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const secounds = 5000;
export default function MensajeriaComponent() {

    const mensajeReducer = useSelector(
        (state) => state.mensaje
    )

    const dispath = useDispatch();

    const limpiar = () => {
        dispath(resetMensaje());
    }
    
    useEffect(()=> {
        if(mensajeReducer.mensaje){
            toast(mensajeReducer.mensaje);
            setTimeout(() => {
                limpiar();
            }, secounds);
        }
    },[mensajeReducer.mensaje]);

    return (
        <ToastContainer/>
    )
}
