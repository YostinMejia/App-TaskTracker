"use client"

import { useEliminarTarea } from "@/hooks/useEliminarTarea";
import { TareaTypeApi } from "@/types/TareaTypes";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { useObtenerTareas } from "@/hooks/useObtenerTareas";
import { useEffect, useState } from "react";

/**
 * Componente para mostrar una lista de tareas y permitir la eliminación de cada una.
 * 
 * Este componente recibe una lista de tareas y muestra cada tarea en una lista. 
 * Proporciona un botón para eliminar cada tarea, que al hacer clic elimina la tarea 
 * correspondiente y recarga la página para mostrar la lista actualizada de tareas.

 * */
export default function TareaUl() {
    /* Se utiliza este State para que cambie cada que se elimina una tarea
    *  y así se renderice completamente el componente para obtener la lista de tareas modificada  
    */
    const [reiniciar, setReiniciar] = useState<boolean>(false)
    const [listaTareas, setListaTareas] = useState<TareaTypeApi[]>([])
    //Hook para obtener las tareas
    const obtenerTareas = useObtenerTareas()
    //Hook para eliminar una tarea
    const eliminarTarea = useEliminarTarea()
    const router = useRouter();

    useEffect(() => {
        const fetchTareas = async () => {

            setListaTareas(await obtenerTareas())
            if (!listaTareas || listaTareas.length === 0) {
                return <p>No hay tareas</p>;
            }
        }
        fetchTareas()
    }, [reiniciar]) //

    const handleClick = async (id: string) => {

        // elimina la tarea y maneja los errores que puedan ocurrir
        await eliminarTarea(id)
        // se cambia el estado de reiniciar para que renderice nuevamente el componente
        setReiniciar(!reiniciar) 
    }

    return (
        <ul>
            {listaTareas.map((tarea: TareaTypeApi, index: number) => (
                <li key={index} >
                    <h2>{tarea.titulo}</h2>
                    <p>{tarea.descripcion}</p>
                    <p>Creado: {tarea.fechaInicializacion}</p>
                    <p>Finalización: {tarea.fechaInicializacion}</p>
                    <Button text="Eliminar tarea" onClick={() => handleClick(tarea.id!)} />
                </li>
            ))}

        </ul>
    )
}