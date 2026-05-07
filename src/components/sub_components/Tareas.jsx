import TaskFinishItem from "./TaskFinishItem"

const Tareas =()=>{
    return (
        <>
        <div className="space-y-2">

        <div>
            <h1 className="text-[52px] font-light text-[#234b63] mb-14 mx-8">
                Tareas
            </h1>
        </div>

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

        <div className="overflow-x-auto mx-8 rounded-lg pb-2 bg-white shadow-base-300/20 shadow-sm text-[var{--main-hard}]">
            <table class="min-w-full table-auto border-separate border-spacing-y-2 border-spacing-x-1">
                <thead>
                    {/* <tr class="border-0 bg-amber-700 *:first:rounded-s-md *:last:rounded-e-md"> */}
                    <tr class="border-0 *first:rounded-s-md *:last:rounded-e-md">
                        <th>Titulo </th>
                        <th>Proyecto </th>
                        <th>Categoria </th>
                        <th>Fecha </th>
                        <th>Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-[var(--main-soft)]"><TaskFinishItem 
                            titulo={"Adaptacion Valvula Y"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"04/03/26"}></TaskFinishItem></tr>
                    <tr class="hover:bg-[var(--main-soft)]"><TaskFinishItem 
                            titulo={"Actualizacion de programa Fuga Burda"} 
                            proyecto={"LTR P/Q"} 
                            categoria={"Intervencion"} 
                            fecha={"09/03/26"}></TaskFinishItem></tr>

                    <tr class="hover:bg-[var(--main-soft)]"><TaskFinishItem 
                            titulo={"Integracion Dispositivo 8"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"24/03/26"}></TaskFinishItem></tr>

                    <tr class="hover:bg-[var(--main-soft)]"><TaskFinishItem 
                            titulo={"Integracion de Mesa de Sellos"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"09/04/26"}></TaskFinishItem></tr>
                    
                </tbody>
            </table>
            
        </div>
        </div>
    </>

    )
}

export default Tareas