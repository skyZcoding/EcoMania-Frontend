<template>
    <div class="h-full w-full flex items-center justify-center">
        <button @click="test" class="h-fit p-4 rounded-md bg-blue-600 text-white">Play</button>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            Id: this.$route.params.Id
        }
    },
    methods: {
        test() {
            var audio = new Audio('../audio/' + this.Id + '.mp3'); // path to file
            audio.play();
        }
    }
}
</script>
