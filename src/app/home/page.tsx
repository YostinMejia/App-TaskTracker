import TareaUl from "@/containers/TareaUl";
import { Tarea } from "@prisma/client";

export default async function Home() {

    const respuesta: Response = await fetch("http:localhost:3000/api/tareas", {
        method: "GET"
    })

    if (!respuesta.ok) {
        return (
            <section>
                <h1>No se encontrarón tareas</h1>
            </section>
        )
    }

    const datos = await respuesta.json();

    if (!datos.ok) {
        return (
            <section>
                <h1>No se encontrarón tareas</h1>
                <p> {datos.error.nombre}: {datos.error.mensaje}</p>
            </section>
        )
    }

    return (
        <main>
            <TareaUl tareaLista={datos.res} />
        </main>
    )
}