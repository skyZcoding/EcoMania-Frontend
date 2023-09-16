<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="container mx-auto mt-6 p-4">
            <!-- Header -->
            <div class="flex justify-between">
                <span class="text-4xl font-bold mb-2 flex items-center">Your receipts</span>
                <img src="../assets/icons/Monster7.svg" alt="Monster 7">
            </div>


            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Card 1 -->
                <div class="bg-white rounded-lg shadow-md p-4 border-solid border-2 border-orange-400">
                    <div class="flex justify-between">
                        <h2 class="mb-2 text-sm">16. September</h2>
                        <h2 class="mb-2 text-sm text-gray-500">CHF 45.40</h2>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-500 text-sm">MM - Revive Reef</p>
                        <p class="text-gray-500 text-sm">4.7 ☆ ☆ ☆ ☆ ☆</p>
                    </div>
                    <div class="flex justify-end">
                        <span class="flex items-center text-orange-500 text-xs mr-2">Coral Sign</span> <img src="../assets/icons/check.svg" alt="Check">
                    </div>
                </div>

                <!-- A few others -->
                <div class="bg-white rounded-lg shadow-md p-4 border-solid border-2 border-orange-400">
                    <div class="flex justify-between">
                        <h2 class="mb-2 text-sm">15. September</h2>
                        <h2 class="mb-2 text-sm text-gray-500">CHF 25.40</h2>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-500 text-sm">MM - Revive Reef</p>
                        <p class="text-gray-500 text-sm">4.7 ☆ ☆ ☆ ☆ ☆</p>
                    </div>
                    <div class="flex justify-end">
                        <span class="flex items-center text-orange-500 text-xs mr-2">Coral Sign</span> <img src="../assets/icons/check.svg" alt="Check">
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md p-4 border-solid border-2 border-orange-400">
                    <div class="flex justify-between">
                        <h2 class="mb-2 text-sm">13. September</h2>
                        <h2 class="mb-2 text-sm text-gray-500">CHF 17.40</h2>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-500 text-sm">MM - Revive Reef</p>
                        <p class="text-gray-500 text-sm">4.7 ☆ ☆ ☆ ☆ ☆</p>
                    </div>
                </div>
                

                <!-- Add more cards as needed -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return null
    },
    methods: {}
}
</script>
