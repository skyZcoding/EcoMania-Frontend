<template>
    <div class="bg-white rounded-lg shadow-md p-4 border-solid border-2 border-orange-400 flex flex-col">
        <div class="flex justify-between">
            <h2 class="mb-2 text-sm">{{date}}</h2>
            <h2 class="mb-2 text-sm text-gray-500">{{price}}</h2>
        </div>
        <div class="flex justify-between mt-4">
            <p class="text-gray-500 text-sm">Sustainability</p>
            <p class="text-gray-500 text-sm">{{rating}} {{starRating}}</p>
        </div>
        <div class="flex justify-end mt-6" v-if="signed">
            <span class="flex items-center text-orange-500 text-xs mr-2">Coral Sign</span> <img src="../assets/icons/check.svg" alt="Check">
        </div>
        <div class="purchases flex-grow" v-if="showPurchases">
            <h3 class="text-lg font-bold mb-4 mt-6">Purchases</h3>
            <ul>
                <li v-for="purchase in receiptPurchases" :class="colorClass(purchase.Cargo).class">{{ purchase.Name }}</li>
            </ul>
            <div class="receipt-add-purchase" @click="addPopularProduct">+</div>
        </div>
        <button class="text-sm text-blue-500 mt-auto" @click="togglePurchases">{{ showPurchases ? 'Hide' : 'Show' }} Purchases</button>
    </div>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title">Add Popular Product</div>
                <div class="modal-close" @click="showModal = false">&times;</div>
            </div>
            <div class="modal-body">
                <ul>
                    <li v-for="product in popularProducts" :key="product.ID" v-if="!isProductInReceipt(product.Name)">
                        <button @click="addProductToReceipt(product.Name)">{{ product.Name }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        date: String,
        price: String,
        popularProducts: Array
    },
    data() {
        return { 
            showPurchases: false,
            receiptPurchases: [],
            rating: 0,
            signed: false,
            showModal: false,
            product: {}
        }
    },
    computed: {
        starRating() {
            const rating = Math.round(this.rating);
            return '★'.repeat(rating) + '☆'.repeat(5 - rating);
        }
    },
    methods: {
        togglePurchases() {
            this.showPurchases = !this.showPurchases;
        },
        colorClass(cargo) {
            switch (true) {
                case cargo > 10:
                    return { class: 'text-yellow-500' };
                case cargo > 20:
                    return { class: 'text-red-500' };
                default:
                    return { class: 'text-gray-500' };
            }
        },
        fillWithRandomProducts() {
            try {
                const num = Math.floor(Math.random() * 8) + 3;
                const purchases = this.popularProducts.slice(0, num).map(product => ({ Name: product.Name, Cargo: product.Cargo, Id: product.ID }));
                this.receiptPurchases = purchases;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchSustainabilityScore(productIds) {
            try {
                const response = await fetch('https://ecomania-api.azurewebsites.net/get_sustainability_score', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ product_ids: productIds })
                });
                const json_raw = await response.json();
                const data = JSON.parse(json_raw);
                this.rating = Math.round(data["score"] * 10) / 10;
                this.signed = data["sustainable"];
            } catch (error) {
                console.error(error);
            }
        },
        addPopularProduct() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        isProductInReceipt(productName) {
            // Check if product is already in receipt purchases
            return this.receiptPurchases.some(purchase => purchase.Name === productName);
        },
        addProductToReceipt(productName) {
            // Add product to receipt purchases
            const product = this.popularProducts.find(product => product.Name === productName);
            this.receiptPurchases.push({ Name: product.Name, Cargo: product.Cargo, Id: product.ID });

            // Close modal
            this.closeModal();
        }
    },
    watch: {
        popularProducts: {
            handler(newPopularProducts) {
                if (newPopularProducts.length > 0) {
                    this.fillWithRandomProducts();
                }
            },
            immediate: true
        },
        receiptPurchases: {
            handler(newPurchases) {
                const productIds = newPurchases.map(purchase => purchase.Id);
                if (productIds.length > 0) {
                    this.fetchSustainabilityScore(productIds);
                }
            },
            deep: true
        }
    }
}
</script>

<style>
.receipt-card-container {
  margin-bottom: 1rem;
}
.purchases {
  margin-top: 1rem;
}
.purchases li {
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}
li {
  list-style-type: disc;
}
.receipt-add-purchase {
  background-color: orange; /* Set the background color to a lighter shade */
  border: none; /* Remove the border */
  border-radius: 50%; /* Set the border radius to make it round */
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Add a box shadow */
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 35px;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
  margin-left: 1rem;
}
.receipt-add-purchase:hover {
  background-color: #edf2f7; /* Set the hover background color to a lighter shade */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25); /* Add a stronger box shadow */
}
/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  max-width: 30rem;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-close {
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 1rem;
}

.modal-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px; /* Set the maximum height of the modal body */
  overflow-y: auto; /* Add a vertical scrollbar when the content overflows */
}

.modal-body li {
  margin-bottom: 0.5rem;
}

.modal-body button {
  background-color: #f7fafc; /* Set the background color to a lighter shade */
  color: #4a5568; /* Set the text color to a darker shade */
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e0; /* Add a border to the button */
  border-radius: 0.25rem;
  cursor: pointer;
}

.modal-body button:hover {
  background-color: #edf2f7; /* Set the hover background color to a lighter shade */
  border-color: #a0aec0; /* Set the hover border color to a darker shade */
}
</style>