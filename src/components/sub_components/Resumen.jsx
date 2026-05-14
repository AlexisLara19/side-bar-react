const Resumen = () => {

    const username = "Ing. Emilio Larrosa";
    const task_done = "30"
    const task_waiting = "10"
    const task_going = "2"

    return(
        <>
        <div className="min-h-screen bg-[#f3f3f3] p-6">
      {/* Título */}
      <h1 className="text-[52px] font-light text-[#234b63] mb-14">
        Resumen
      </h1>

      {/* Nombre */}
      <div className="flex justify-center mb-24">
        <div className="w-[430px] 
                        bg-white text-[var(--main-hard)] shadow-lg shadow-base-300/10
                        rounded-xl py-3 text-center
                         rounded-2xl  
                          ">
          <span className="text-[24px] font-semibold text-[#234b63]">
            {username}
          </span>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="flex justify-center gap-20 flex-wrap 
                  [&>*]:bg-white [&>*]:rounded-2xl  
                  [&>*]:shadow-lg [&>*]:outline [&>*]:outline-black/5 [&>*]:hover:cursor-pointer
                  text-[#234b63] text-[15px] font-semibold uppercase">
        
        {/* Card 1 */}
        <div className="group p-4 justify-center space-y-2
                      border border-[var(--green-line)]
                      hover:bg-[var(--green-line)] hover:text-white">
          <h2 className="">
            Tareas Realizadas
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-[var(--green-line)]
                             group-hover:text-white ">
              {task_done}
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group p-4 justify-center space-y-2
                      border border-[var(--orange-line)]
                      hover:bg-[var(--orange-line)] hover:text-white">
          <h2 className="">
            Tareas Pendientes
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-[var(--orange-line)]
                             group-hover:text-white ">
              {task_waiting}
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group p-4 justify-center space-y-2
                      border border-[var(--yellow-line)]
                      hover:bg-[var(--yellow-line)] hover:text-white">
          <h2 className="">
            Tareas En Curso
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-[var(--yellow-line)]
                             group-hover:text-white ">
              {task_going}
            </span>
          </div>
        </div>

        


      </div>
    </div>
            
            
        </>
    )
}

export default Resumen
