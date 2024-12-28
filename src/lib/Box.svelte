<script>
  import Button from "./Button.svelte";

</script>
<div class="flex space-x-5 items-center justify-center gap-10 mt-10 flex-wrap">
    <div class="transform rounded-xl h-64 w-64 sm:h-72 border-double border-4 border-white sm:w-72 bg-black shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center flex-col">
            <h1 class="font-extrabold text-3xl text-white">XRouter</h1>
            <span class="font-bold text-white text-center text-1xl mt-5 features">A Simple ExpressJS Router</span>
            <span class="font-bold text-white text-1xl mt-1 features">Supports Hooks</span>
            <Button icon='<i class="fa-solid fa-link"></i>' text='XRouter' href='https://github.com/SystXD/Xrouter'/>
        </div>
    </div>

    <div class="transform rounded-xl h-64 w-64 sm:h-72 border-double border-4 border-white sm:w-72 bg-black shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center flex-col">
            <h1 class="font-extrabold text-3xl text-white">School API</h1>
            <span class="font-bold text-center text-white text-1xl mt-5 features">API for school Management</span>
            <Button icon='<i class="fa-solid fa-link"></i>' text='API' href='https://github.com/SystXD/School-ERP-Backend'/>
        </div>
    </div>

    <div class="transform rounded-xl h-64 w-64 sm:h-72 border-double border-4 border-white sm:w-72 bg-black shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center flex-col">
            <h1 class="font-extrabold text-3xl text-white">Pagination</h1>
            <span class="font-bold text-white text-1xl text-center mt-5 features">Pagination Module for DJS</span>
            <Button icon='<i class="fa-solid fa-link"></i>' text='Pagination' href='https://github.com/SystXD/djs-pagination'/>

        </div>
    </div>
</div>

<style>
    .features {
        font-family: "Baloo Da 2", sans-serif;
    }
</style>