<template>
    <nav>
        <ul class="w-full flex justify-center items-center align-center border-b-2 border-b-primary">
            <li class="p-3 mx-6"><NuxtLink to="/behandelingen">Behandelingen</NuxtLink></li>
            <li class="p-3 mx-6"><NuxtLink to="/het-salon"> Het salon</NuxtLink> </li>
            <li class="p-3 mx-6">Puppie gewenning</li>
            <li class="bg-white overflow-hidden rounded-b-full p-3 mx-3 mb-[-44px] border-b-2 border-b-primary"><NuxtLink to="/"><img class="w-40" src="/assets/images/Logo.png" /></NuxtLink></li>
            <li class="p-3 mx-6">Katten trimmen</li>
            <li class="p-3 mx-6"><NuxtLink to="/huisregels"> Huisregels</NuxtLink></li>
            <li class="p-3 mx-6">Contact</li>
        </ul>
    </nav>
    <slot></slot>
    <Footer></Footer>
</template>