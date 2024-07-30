"use client"
// Importar estilos CSS de el calendario
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useCrearTarea } from "@/hooks/useCrearTarea";
import { useRouter } from "next/navigation";


/**
 * Componente para crear una nueva tarea.
 * 
 * Este componente presenta un formulario que permite al usuario ingresar un título y una descripción para una tarea,
 * así como seleccionar fechas de inicio y finalización. Al enviar el formulario, la tarea se crea utilizando un hook
 * personalizado `useCrearTarea`.
 */

export default function TareaForm() {

    // Estado para el contador de datos y la fecha seleccionada
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFinal, setFechaFinal] = useState(new Date());

    //Hook para crear una tarea
    const crearTarea = useCrearTarea()

    /**
     * Maneja el envío del formulario para crear una nueva tarea.
     * 
     * Esta función previene el comportamiento por defecto del formulario, convierte los datos del formulario en un objeto 
     * `FormData`, y utiliza el hook `crearTarea` para enviar estos datos al servidor. También maneja las fechas de inicio
     * y finalización seleccionadas por el usuario.
     * 
     */

    const guardarFormulario: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        //evita que se reinicie la página
        event.preventDefault();
        // Se convierten los datos del formulario en una clase FormData para luego ser accedidos en el hook
        const tareaFormData = new FormData(event.currentTarget)
        // hook que se encarga del almacenamiento de la tarea y manejar los errores que puedan suceder
        await crearTarea(tareaFormData, fechaInicio, fechaFinal)
    }

    return (
        <div className="max-w-md mx-auto">

            <h3 className="text-xl font-bold mb-4">Crea una nueva tarea</h3>

            {/* Formulario */}
            <form onSubmit={guardarFormulario} className="space-y-2">

                {/* Campo Título */}
                <div>
                    <label htmlFor="titulo-form" className="label-input-style">Título</label>
                    <Input
                        id="titulo-form"
                        type="text"
                        name="titulo"
                        placeholder="Título de la tarea"

                    />
                </div>

                {/* Campo Descripción */}
                <div>
                    <label htmlFor="descripcion-form" className="label-input-style">Descripción</label>
                    <Input
                        id="descripcion-form"
                        type="text"
                        name="descripcion"
                        placeholder="Descripción de la tarea"
                    />
                </div>

                {/* Selector de Fecha Inicio*/}
                <div>
                    <label htmlFor="fecha-inicio-form" className="block text-sm font-medium text-gray-700">Selecciona una fecha de inicio</label>
                    <DatePicker
                        id="fecha-inicio-form"
                        selected={fechaInicio}
                        onSelect={(fechaSeleccionada) => setFechaInicio(fechaSeleccionada!)}
                        onChange={(fechaSeleccionada) => setFechaInicio(fechaSeleccionada!)}
                        className="input-style"
                    />
                </div>

                {/* Selector de Fecha Final*/}
                <div>
                    <label htmlFor="fecha-final-form" className="block text-sm font-medium text-gray-700">Selecciona una Fecha límite</label>
                    <DatePicker
                        id="fecha-final-form"
                        selected={fechaFinal}
                        onSelect={(fechaSeleccionada) => setFechaFinal(fechaSeleccionada!)}
                        onChange={(fechaSeleccionada) => setFechaFinal(fechaSeleccionada!)}
                        className="input-style"
                    />
                </div>

                {/* Botón de Envío */}
                <div>
                    <Button text="Crear tarea" />
                </div>
            </form>
        </div>
    )
}