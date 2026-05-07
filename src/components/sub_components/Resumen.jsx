const Resumen = () => {
    return(
        <>
        <div className="min-h-screen bg-[#f3f3f3] p-6">
      {/* Título */}
      <h1 className="text-[52px] font-light text-[#234b63] mb-14">
        Resumen
      </h1>

      {/* Nombre */}
      <div className="flex justify-center mb-24">
        <div className="w-[430px] border-2 border-blue-600 rounded-xl py-3 text-center">
          <span className="text-[24px] font-semibold text-[#234b63]">
            Ing. Emilio Luna
          </span>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <div className="w-[170px] h-[160px] border-2 border-green-400 rounded-2xl p-4 flex flex-col justify-between">
          <h2 className="text-[15px] font-semibold uppercase text-[#234b63]">
            Tareas Realizadas
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-green-400">
              25
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[170px] h-[160px] border-2 border-orange-400 rounded-2xl p-4 flex flex-col justify-between">
          <h2 className="text-[15px] font-semibold uppercase text-[#234b63]">
            Tareas Pendientes
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-orange-400">
              5
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[170px] h-[160px] border-2 border-yellow-400 rounded-2xl p-4 flex flex-col justify-between">
          <h2 className="text-[15px] font-semibold uppercase text-[#234b63]">
            Tareas en Curso
          </h2>

          <div className="flex justify-center items-center">
            <span className="text-[64px] font-light text-yellow-400">
              1
            </span>
          </div>
        </div>
      </div>
    </div>
            
            
        </>
    )
}

export default Resumen
