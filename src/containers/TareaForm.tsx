"use client"
// Importar estilos CSS de el calendario
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

// Componente funcional TareaForm
export default function TareaForm() {

    // Estado para el contador de datos y la fecha seleccionada
    const [fecha, setFecha] = useState(new Date());

    // Función para manejar el envío del formulario
    const guardarFormulario: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // lógica para guardar la tarea
        const tareaFormData = new FormData(event.currentTarget)
        const titulo = tareaFormData.get("titulo")
        const descripcion = tareaFormData.get("descripcion")
        console.log('Título:', titulo);
        console.log('Descripción:', descripcion);
        console.log('Fecha:', fecha.toLocaleDateString());
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

                {/* Selector de Fecha */}
                <div>
                    <label htmlFor="fecha-form" className="block text-sm font-medium text-gray-700">Selecciona una Fecha límite</label>
                    <DatePicker
                        id="fecha-form"
                        selected={fecha}
                        onSelect={(fechaSeleccionada) => setFecha(fechaSeleccionada!)}
                        onChange={(fechaSeleccionada) => setFecha(fechaSeleccionada!)}
                        className="input-style"
                    />
                </div>

                {/* Botón de Envío */}
                <div>
                    <Button text="Crear tarea" />
                </div>
            </form>
        </div>
    );
}