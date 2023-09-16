<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="container mx-auto mt-6 p-4">
            <!-- Header -->
            <div class="flex justify-between">
                <span class="text-4xl font-bold mb-2 flex items-center">Your receipts</span>
                <img src="../assets/icons/Monster7.svg" alt="Monster 7">
            </div>

            <div class="receipts-container">
                <ReceiptCard v-for="(receipt, index) in receipts" :key="index" :date="receipt.date" :price="receipt.price" :popular-products="popularProducts" />
            </div>
        </div>
    </div>
</template>

<script>
import ReceiptCard from '../components/ReceiptCard.vue'
export default {
    components: {
        ReceiptCard
    },
    data() {
        return {
            receipts: [
                {
                date: '16. September',
                price: 'CHF 45.40'
                },
                {
                date: '15. September',
                price: 'CHF 20.00'
                }
            ],
            popularProducts: []
        }
    },
    async mounted() {
        try {
            const response = await fetch('https://ecomania-api.azurewebsites.net/get_popular_products');
            const products = await response.json();
            this.popularProducts = products;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style>
.receipts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
