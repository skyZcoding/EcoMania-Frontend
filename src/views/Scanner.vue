<template>
    <div>
        <div v-if="!active">
            <QrcodeStream :paused="active" @detect="onDetect">
            </QrcodeStream>
        </div>

        <div v-if="active" class="h-full w-full flex items-center justify-center">
            <p>{{ rawValue }}</p>
        </div>
    </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
    methods: {
        onDetect(detectedCodes) {
            console.log("Testing detected!")
            console.log(detectedCodes[0].rawValue)
            this.rawValue = detectedCodes[0].rawValue
            this.active = true
            this.$router.push("/monster/" + this.rawValue)
        }
    },
    data() {
        return {
            active: false,
            rawValue: ""
        }
    },
    components: {
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    },
}
</script>