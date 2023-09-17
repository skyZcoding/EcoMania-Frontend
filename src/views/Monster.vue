<template>
    <div class="h-full w-full px-12 md:px-24 flex flex-col items-center justify-center md:pt-0 pt-12">
        <div class="flex flex-col" v-if="!Requested">
            <h3 class="font-medium text-[#EE6F2D] text-3xl">
                Configure your custom Scrapster
            </h3>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <p class="font-normal text-lg mt-4 mr-5">Color:</p>
                    <input v-model="Color" type="text" class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 focus:border-0 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EE6F2D]-600">
                </div>
                <div class="flex flex-row">
                    <p class="font-normal text-lg mt-4 mr-4">Name:</p>
                    <input v-model="Name" type="text" class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 focus:border-0 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EE6F2D]-600">
                </div>
                <button @click="request" class="mt-2 w-full hover:bg-[#b24800] h-fit py-2 rounded-md bg-[#EE6F2D] font-medium text-white" >
                    Request
                </button>
            </div>
        </div>
        <div  v-if="Requested" class="flex flex-col md:flex-row justify-between w-full items-center">
            <div class="flex flex-col justify-center mr-0 md:mr-8 md:items-start items-center">
                <h1 class="text-[#EE6F2D] text-5xl md:text-start text-center">{{ Title }}</h1>
                <button :disabled="!LoadedImage" class="mt-12 hover:bg-[#b24800] h-fit w-64 py-2 rounded-md bg-[#EE6F2D] font-medium text-white" @click="test">
                    <p v-if="!Started">Play the story</p>
                    <p v-else-if="Active">Stop the story</p>
                    <p v-else>Resume the story</p>
                </button>
            </div>

            <img v-if="LoadedImage" v-bind:src="ImageUrl" class="h-[18rem] my-8 w-fit " alt="">
            <img v-else src="../assets/tetrabreeze.jpeg" class="h-[18rem] my-8 w-fit " alt="">      
        </div>
        <div  v-if="Requested" class="w-fit">
            <p>
                {{ Story }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        
    },
    data() {
        return {
            Id: this.$route.params.Id,
            Color: "",
            Name: "",
            Title: "Wings of Hope: Tetra Breeze and the Lost Flock",
            Story: "Wow! This bird is truly spectacular! Lily danced with delight around their latest Scrapster.I am Tetra Breeze! My wings take me across mighty oceans and towering mountains! Fynn's eyes lit up with curiosity, he always had a fascination with anything related to flying. Can you describe how the world looks from up above? he asked, barely able to contain his excitement. Why tell when I can show? replied Tetra breeze. And just like that, they were soaring high above the shimmering waters of Revive Reef. The ships at Driftwood Harbor look like toys from up here! Lily squealed, her eyes wide with thrill as she took in the view. Fynn felt a flutter in his belly and decided to focus on the vast expanse of the ocean instead. Suddenly, he noticed some specks moving across the sky. Hey, what's that in the distance? Lily squinted, her gaze following where Fynn pointed. That looks like a convoy of birds! Let's go meet our winged friends, shall we? And whoosh, they flew towards the distant flock led by Tetra breeze.They got more and more excited as they neared the formation of birds. These don't look like any ordinary bird, their wings are so different! exclaimed Fynn.Tetra breeze explained, Those are migratory birds! They must have lost their way in the storm last night. Hearing this, Lily sat up straighter on Tetra breeze's back, her face glowing with determination. We must help them! Let's guide them to Revive Reef and build them a shelter.We can use the cookie packaging and sandwich wrappers in my scrap bag! she suggested enthusiastically. So, they swooped down to land and crafted a makeshift birdhouse with the materials at hand.As the birds fluttered inside their new abode with chirps of relief, the kids high fived each other.After bidding farewell to their winged friends, they flew back home as the sun set, their winged adventure with Tetra breeze making that day one they would never forget.",
            ImageUrl: "../assets/tetrabreeze.jpeg",
            Started: false,
            Active: false,
            Speech: "",
            Utterance: "",
            LoadedImage: false,
            Requested: false
        }
    },
    methods: {
        request() {
            this.Requested = true

            // Fetching the story
            fetch(
                "https://ecomania-api.azurewebsites.net/get_story",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify({
                        monster_id: parseInt(this.Id),
                        color: this.Color,
                        your_name: this.Name
                    })
                }
            ).then(response => response.json())
                .then(
                    data => {
                        // Displaying story and setting up speech
                        this.Story = data
                        this.Speech = window.speechSynthesis
                        this.Utterance = new SpeechSynthesisUtterance(this.Story)
                        var voices = this.Speech.getVoices()
                        const voice = (voices.filter(function (voice) { return voice.name == 'Google UK English Male'; }))[0]
                        this.Utterance.voice = voice
                    }
                )

            // Fetching the image
            fetch(
                "https://ecomania-api.azurewebsites.net/get_monster_image_url",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify({
                        monster_id: parseInt(this.Id),
                        color: this.Color,
                    })
                }
            ).then(response => response.json())
                .then(
                    data => {
                        this.ImageUrl = data
                        this.LoadedImage = true
                    }
                )
        },
        test() {
            if (!this.Started) {
                this.Speech.speak(this.Utterance)
                this.Started = true
                this.Active = true
            } else if (this.Active) {
                this.Speech.pause()
                this.Active = false
            } else {
                this.Speech.resume()
                this.Active = true
            }
            
        }
    }
}
</script>
