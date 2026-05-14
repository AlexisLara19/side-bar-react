

const MiPerfil = () => {
    return(
        <>
            <div class="relative flex h-auto min-h-screen items-center justify-center 
            overflow-x-hidden py-10 px-4">

            {/* <div class="relative flex items-center justify-center px-4 sm:px-6 lg:px-8"> */}
            

            {/* Main Page Container */}
            <div class="bg-white text-[var(--main-hard)] shadow-base-300/10 z-1 space-y-6 rounded-xl p-6 shadow-md sm:min-w-md lg:p-8">
                
                {/* Top Logo */}
                <div class="flex items-center justify-center gap-4 sm:gap-6">
                <img src="/at_logo.png" class="size-12" alt="brand-logo" />
                <h2 class="text-base-content text-[var(--main-hard)]/30 text-xl font-bold">Airtemp de Mexico</h2>
                </div>

                {/* Title div */}
                <div className="flex items-center justify-center">
                <h3 class="text-base-content mb-1.5 text-2xl font-semibold ">Inicio de sesion </h3>
                <p class="text-base-content/80"></p>
                </div>
                

                {/* Login as div */}
                <div class="flex items-center justify-center gap-4 sm:gap-6">
                
                {/* <a href="#" class=" checked:bg-blue-500 ">Login as User</a>
                
                <a href="#" class=" ">Login as Admin</a> */}

                {/* <div class="flex gap-4 p-4 bg-gray-100 rounded-xl">

                <label class="flex-1 cursor-pointer p-4 rounded-lg 
                        bg-white border-2 border-transparent transition-all
                        has-checked:border-blue-600 has-checked:bg-blue-50 
                        has-checked:text-blue-700">
    
                    <input type="radio" name="plan" />
                    <span class="block font-bold">Administrador</span>
                </label>

                <label class="flex-1 cursor-pointer p-4 rounded-lg 
                            bg-white border-2 border-transparent transition-all
                            has-checked:border-blue-600 has-checked:bg-blue-50 
                            has-checked:text-blue-700">
                
                    <input type="radio" name="plan" />
                    <span class="block font-bold">Usuario</span>
                </label>
                </div> */}

                


                </div>


                <div class="">


                {/* Login form */}
                <form class="mb-4 space-y-4 items-center" onsubmit="return false;">

                    <div class="flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row">

                        <label class="relative cursor-pointer">
                            <input type="radio" name="selection" class="peer sr-only" />
                            <div class="px-6 py-2 rounded-lg border-2 border-transparent 
                                    bg-white text-gray-700 shadow-sm transition-all
                                    peer-checked:border-blue-600 peer-checked:text-blue-600 
                                    peer-checked:bg-blue-50" >
                            Usuario
                            </div>
                        </label>

                        <label class="relative cursor-pointer">
                            <input type="radio" name="selection" class="peer sr-only" required/>
                            <div class="px-6 py-2 rounded-lg border-2 border-transparent 
                                bg-white text-gray-700 shadow-sm transition-all 
                                    peer-checked:border-blue-600 peer-checked:text-blue-600 
                                    peer-checked:bg-blue-50">
                            Administrador
                            </div>
                        </label>

                    </div>

                    
                    {/* Email address input row */}
                    <div class="flex flex-col sm:flex-row space-x-3 space-y-1">
                    <label class="label-text" for="userEmail">Correo: </label>
                    <input type="email" placeholder="micorreo@airtemp.com.mx" 
                            class="input placeholder:text-gray-500/50 rounded-md
                            invalid:border-pink-500 invalid:text-pink-600 
                            focus:border-sky-500 focus:outline focus:outline-sky-500 
                            focus:invalid:border-pink-500 focus:invalid:outline-pink-500 
                            disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 
                            disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20
                            " id="userEmail" required />
                    </div>

                    {/* Password input row */}
                    <div class="flex flex-col sm:flex-row space-x-3 space-y-1">
                    <label class="label-text" for="userPassword">Contraseña: </label>
                    <div class="input">
                        <input id="userPassword" type="password" placeholder="············" 
                                class="placeholder:text-gray-500/50 rounded-md
                             invalid:border-pink-500 invalid:text-pink-600 
                             focus:border-sky-500 focus:outline focus:outline-sky-500 
                             focus:invalid:border-pink-500 focus:invalid:outline-pink-500 
                             disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 
                               disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20" 
                                required />
                        <button
                        type="button"
                        data-toggle-password='{ "target": "#userPassword" }'
                        class="block cursor-pointer"
                        aria-label="userPassword"
                        >
                        <span class="icon-[tabler--eye] password-active:block hidden size-5 shrink-0"></span>
                        <span class="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0"></span>
                        </button>
                    </div>
                    </div>


                    {/* Remember me / forgot password row */}
                    <div class="flex flex-col items-center justify-between gap-4 sm:gap-10 sm:flex-row">
                    
                    {/* Remember me */}
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="checkbox checkbox-primary" id="rememberMe" />
                        <label class="label-text text-base-content/80 p-0 text-base" for="rememberMe">
                        Recordar</label>
                    </div >

                    {/* Forgot password */}
                    <div class="group ">
                    <a href="#" class="relative text-xs 
                        after:absolute 
                        after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right 
                        after:scale-x-0 after:bg-blue-600 after:transition-transform 
                        after:duration-300 
                        group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                        Olvide mi contraseña</a>

                    </div>
                    </div>


                    <div class="flex items-center justify-center">
                    {/* Sign in button */}
                    <button type="submit" className=" flex items-center justify-between cursor-pointer
                                            px-6 py-2 rounded-lg border-2 border-transparent 
                                          bg-white text-[var(--secondary-soft)] shadow-sm
                                            hover:bg-blue-50">
                        Iniciar sesion </button>

                    </div>
                </form>
                
                
                </div>
            </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default MiPerfil
