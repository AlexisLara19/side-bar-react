

{/* Elementos de tabla Tareas Pendientes / En Cola  */}
{/* Titulo / Proyecto / Categoria / Fecha de solicitud / Boton de iniciar tarea / Eliminar tarea   */}

const TaskWaitingItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center px-0.5">{titulo}</td>
            <td className="px-0.5">{proyecto}</td>
            <td className="px-0.5"><span className="bg-[var(--yellow-line)]">{categoria}</span></td>
            <td className="px-2">{fecha}</td>
            <td className="flex flex-row justify-center gap-x-0.5 p-1.5">
                {/* Iniciar tarea */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-arrow-right-to-bracket text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                {/* Eliminar tarea */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-trash-arrow-up text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
            </td>
        
        </>

    )
}

export default TaskWaitingItem;