<template>
    <nav class="bg-white shadow-sm">
        <div class="flex flex-wrap justify-between p-4 items-center">
            <router-link to="/">
                <img src="../assets/logo.svg" class="h-10">
            </router-link>
            <div class="flex flex-row items-center">
                    <router-link to="/scanner">
                        <QRCodeIcon class="text-slate-800 hover:text-[#EE6F2D] duration-200 h-10 mx-2" />
                    </router-link>
                </div>
        </div>
    </nav>
</template>

<script>
import QRCodeIcon from "./icons/QRCode.vue"

export default {
    components: {
        QRCodeIcon
    },
}
</script>