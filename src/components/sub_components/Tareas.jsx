import TaskCompleteTable from "./Task_Components/TaskCompleteTable"
import TaskGoingTable from "./Task_Components/TaskGoingTable"
import TaskWaitingTable from "./Task_Components/TaskWaitingTable"


const Tareas =()=>{
    return (
        <>
        <div className="space-y-2">

            {/* Titulo */}
            <div>
                <h1 className="text-[52px] font-light text-[#234b63] mb-14 mx-8">
                    Tareas
                </h1>
            </div>

            {/* Navigation Bar */}
            <div className="mx-8 mb-10">
                <nav className="bg-white w-full antialiased rounded-lg text-[18px] border-b-1 border-[var(--main-hard)] bg-white">
                    <div className=" px-4 mx-auto 2xl:px-0 py-2">
                        <div className="flex items-start justify-between text-[var(--main-hard)]">
                            <ul class="flex justify-start gap-6 md:gap-8 py-3  ">
                                
                                <li className="shrink-0 hover:bg-[var(--tertiary-color)]">
                                    <a href="#" title="" className="flex  ">
                                        Pendientes
                                    </a>
                                </li>
                                <li className="shrink-0 hover:bg-[var(--tertiary-color)]">
                                    <a href="#" title="" className="flex hover:text-primary-700 ">
                                        Realizadas
                                    </a>
                                </li>
                                <li className="shrink-0 hover:bg-[var(--tertiary-color)]">
                                    <a href="#" title="" className="flex hover:text-primary-700">
                                        En curso
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Cambio de tablas */}
            <div className="">
                <TaskCompleteTable></TaskCompleteTable>
            </div>
        </div>
    </>

    )
}

export default Tareas