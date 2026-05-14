
const Components= () => {
    return (
        <>
            <div class="py-8 px-8">
            {/* <!-- fondo blanco/ fondo negro en modo dark --> */}
            {/* <!-- redondeo de 8px, padding en x, padding en y -->
            <!-- ring->marco, sombra, ring gray->efecto tarjeta --> */}
            <div class="bg-white dark:bg-gray-800 
                        rounded-lg px-6 py-8  
                        ring shadow-xl ring-gray-900/5">
            <div>
                {/* <!-- Cuadrado color indigo --> */}
                <span class="inline-flex items-center justify-center 
                            rounded-md bg-indigo-500 p-2 shadow-lg">
                {/* <!-- Imagen de lapiz --> */}
                <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    
                </svg>
                </span>
            </div>
            <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            </div>
            </div>
        {/* <!-- .................................................................. --> */}
        
            <div class="py-8 px-4">
            {/* <!-- Contenedor principal -->
            <!-- mx-auto > centra el elemento, flex > ordenamiento de elementos (por defecto en fila), 
            max-w-sm > ancho maximo de 348px, items-center> alineacion, gap-x-4 > espacio entre elementos  --> */}
            <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl 
                    bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800            dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            {/* <!-- Imagen de logo -->
            <!-- Tamanio fijo de 48px , shink evita que el logo se haga mas pequenio se derbordan 
            antes los otros elementos --> */}
            <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />

            {/* <!-- Contenedor con dos elementos de texto --> */}
            <div>
                <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
            </div>
            </div>
            </div>

        {/* <!-- .................................................................. --> */}

            <div class="bg-amber-200 py-8 px-4">
            {/* <!-- Contenedor principal-->
            <!-- flex > activamos la logica flex, flex-col > configuramos ordenamiento en columnas
            sm:flex-row > a partir de pantallas pequenias ordenamiento en filas, 
            sm:items-center > a partir de pantallas pequenias centrado, ...--> */}
            <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4
                    bg-amber-600 ">

            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
            {/* <!-- sm:text-left > a apartir de pantallas pequenias alinear a la izquierda--> */}
            <div class="space-y-2 bg-amber-700 text-center sm:text-left">
                <div class="space-y-0.5">
                <p class="text-lg font-semibold text-black">Erin Lindford</p>
                <p class="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                Message
                </button>
            </div>
            </div>
            </div>

        {/* <!-- .................pseudo clase peer con input................................................. --> */}
        

            <div class=" py-8 px-4 bg-amber-950">
            <form class="p-6 max-w-sm mx-auto">

            {/* <!--Creamos el contenedor label-->
            <!--block > obliga a que tome el ancho de su padre--> */}
            <label class="block bg-amber-100">
                {/* <!--Creamos el titulo del input--> */}
                <span class="block text-sm font-medium text-slate-700 mb-1 bg-amber-500">Email</span>
                
                {/* <!--peer > marcamos este elemento como referencia para sus hermanos (mas proximo)-->
                <!--type email > hace la comparacion con la estructura de correo valida --> */}
                <input 
                type="email" 
                placeholder="tu@correo.com"
                class="peer w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
                />
                
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm font-medium">
                Please provide a valid email address.
                </p>
            </label>
            </form>
            </div>
        
        {/* <!-- .................pseudo clase peer con checkbox................................................. --> */}
        

            <div class=" py-8 px-4 bg-amber-950">
            <div class="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm max-w-sm">

            {/* <!-- peer > Establecemos como referencia referencia en el label principal que contendra el checkbox y el texto-->
            <!-- has > cuando la propiedad/pseudoelemento checked cambie entonces se aplica el estilo en label (el texto) --> */}
            <label class="peer flex items-center gap-3 cursor-pointer select-none text-slate-700 has-[:checked]:text-slate-400 has-[:checked]:line-through">
                {/* <!--Insertamos dentro del label la propiedad checked/ la activamos por defecto --> */}
                <input 
                type="checkbox" 
                name="todo[1]" 
                checked 
                class="w-5 h-5 accent-blue-600 cursor-pointer"
                />
                Create a to do list
            </label>

            {/* <!-- Elemento grafico -->
            <!-- peer-has >  si el elemento de referencia/hermano cambia su estado interno de checked entonces activa el estilo--> */}
            <svg
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-6 h-6 text-slate-400 peer-has-[:checked]:hidden"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </div>
            </div>
        
        {/* <!-- .................pseudo clase group/{name} con elemento visible................................................. --> */}
        <div class=" py-8 px-4 bg-amber-50">

            {/* <!--Creamos la lista (ul) de elementos que contendra los contactos --> */}

            <ul role="list" class="p-6 divide-y divide-slate-200 bg-blue-200">

            {/* <!--Reorremos el arreglo-->
            {#each people as person}
                <!-- Declaramos el elemento (li) de la lista -->
                <!-- group/item > declaramos un grupo de nombre item que nos servira para el hover del item completo --> */}
                <li class="group/item flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                
                <div class="flex items-center gap-4">
                    <img class="h-12 w-12 rounded-full" src={person.image} alt={person.name} />
                    <div class="flex flex-col">
                    <strong class="text-sm font-medium text-slate-900">{person.name}</strong>
                    <span class="text-sm text-slate-500">{person.role}</span>
                    </div>
                </div>

                {/* <!--group/edit > declaramos un nuevo grupo de nombre edit  que nos servira para el boton del elemento, inicialmente esta oculto -->
                <!-- group-hover/item:visible > cuando se active el hover del grupo item se volvera visible el boton --> */}
                <a 
                    class="group/edit invisible group-hover/item:visible flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500 transition-all hover:bg-slate-200" 
                    href="tel:{person.phone}"
                >

                {/* <!-- Texto del boton -->
                <!-- Cuando algun elemento del grupo edit active su hover se aplica el estilo al texto--> */}
                    <span class="group-hover/edit:text-gray-900">Call</span>
                    
                    {/* <!-- Cuando algun elemento del grupo edit active su hover se aplica el estilo al texto--> */}
                    <svg 
                    class="h-4 w-4 transition-transform group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-700" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="2"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>

                </li>
            {/* {/each} */}
            </ul>
            </div>
        {/* <!-- .................pseudo clase peer/{name} con elemento visible................................................. --> */}
            
            <div class="bg-amber-50 px-4 py-8">
            {/* <!-- Fieldset nos ayuda a agrupar elementos en formularios--> */}
            <fieldset>
                <legend>Published status</legend>
                {/* <!--Radio button - Utilizamos el ID para relacionar elementos de texto posteriormente --> */}
                <input id="draft" class="peer/draft" type="radio" name="status" checked />
                {/* <!-- for= > Indicamos que se vinculara con el input draft, se amplia igual el area de click -->
                <!-- peer-checked/draft > indicamos que la propiedad checked del hermano draft cambiara el estilo del texto --> */}
                <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

                {/* <!--Radio button - Utilizamos el ID para relacionar elementos de texto posteriormente --> */}
                <input id="published" class="peer/published" type="radio" name="status" />
                {/* <!-- for= > Indicamos que se vinculara con el input published, se amplia igual el area de click -->
                <!-- peer-checked/published > indicamos que la propiedad checked del hermano published cambiara el estilo del texto --> */}
                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                {/* <!-- peer-checked/{name}:block > muestra el div ocupando todo el ancho disponible--> */}
                <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
                <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
            </fieldset>
            </div>
        
        {/* <!-- .................pseudo clase peer/{name} con elemento visible................................................. --> */}

        <div class="bg-amber-50 px-4 py-8">
        <div class="max-w-sm p-6">
        <label class="flex flex-col-reverse">
            
            
            <input 
            type="email" 
            name="email" 
            required
            placeholder="you@example.com"
            class="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-red-500 invalid:text-red-600
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" 
            />
            {/* <!-- La clase after es solo para controlar el comportamiento del asterisco de forma modular--> */}
            <span class="block text-sm font-medium text-gray-700 after:ml-0.5  
            peer-invalid:after:animate-pulse after:content-['*'] after:text-red-500 ">
            Email
            </span>


            <p class="mt-2 invisible peer-[:not(:placeholder-shown)]:invalid:visible text-pink-600 text-xs">
            Please enter a valid email address.
            </p>
        </label>
        </div>
        </div>

        </>
    )
    
}