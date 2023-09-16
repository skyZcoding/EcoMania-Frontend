<template>
    <div>
        <QrcodeStream @detect="onDetect">
        </QrcodeStream>
    </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
    methods: {
        onDetect(detectedCodes) {
            console.log("Testing detected")
            console.log(detectedCodes[0].rawValue)
        }
    },
    data() {
        
    },
    components: {
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    },
}
</script>