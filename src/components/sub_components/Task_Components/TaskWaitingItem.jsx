

{/* Elementos de tabla Tareas Pendientes / En Cola  */}
{/* Titulo / Proyecto / Categoria / Fecha de solicitud / Boton de iniciar tarea / Eliminar tarea   */}

const TaskWaitingItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center">{titulo}</td>
            <td>{proyecto}</td>
            <td><span className="bg-[var(--yellow-line)]">{categoria}</span></td>
            <td>{fecha}</td>
            <td className="justify-center gap-x-4.5 pl-10">
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