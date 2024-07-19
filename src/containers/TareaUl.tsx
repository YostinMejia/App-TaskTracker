import { Tarea as TareaType } from "@prisma/client";

export default function TareaUl({ tareaLista }: { tareaLista: TareaType[] }) {

    return (
        <ul>
            {tareaLista.map((tarea: TareaType, index: number) => (
                <li key={index} >
                    <h2>{tarea.titulo}</h2>
                    <p>{tarea.descripcion}</p>
                    <p>Creado: {new Date(tarea.fechaInicializacion).toLocaleDateString()}</p>
                    <p>Finalización: {new Date(tarea.fechaFinalizacion).toLocaleDateString()}</p>
                </li>
            ))}

        </ul>
    )
}