<template>
    <div class="h-full w-full px-12 md:px-24 flex flex-col items-center justify-center md:pt-0 pt-12">
        <div class="flex flex-col md:flex-row justify-between w-full">
            <div class="flex flex-col justify-center mr-8">
                <h1 class="text-[#EE6F2D] text-5xl">{{ Title }}</h1>
                <button class="mt-12 w-fit h-fit md:px-24 px-12 py-2 rounded-md bg-[#EE6F2D] font-medium text-white" @click="test">
                    Play the story
                </button>
            </div>

            <img src="../assets/tetrabreeze.jpeg" class="h-[18rem] w-fit" alt="">      
        </div>
        <div class="w-fit">
            <p>
                {{ Story }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Id: this.$route.params.Id,
            Title: "This is a cool Story",
            Story: "Wow! This bird is truly spectacular! Lily danced with delight around their latest Scrapster.I am Tetra Breeze! My wings take me across mighty oceans and towering mountains! Fynn's eyes lit up with curiosity, he always had a fascination with anything related to flying. Can you describe how the world looks from up above? he asked, barely able to contain his excitement. Why tell when I can show? replied Tetra breeze. And just like that, they were soaring high above the shimmering waters of Revive Reef. The ships at Driftwood Harbor look like toys from up here! Lily squealed, her eyes wide with thrill as she took in the view. Fynn felt a flutter in his belly and decided to focus on the vast expanse of the ocean instead. Suddenly, he noticed some specks moving across the sky. Hey, what's that in the distance? Lily squinted, her gaze following where Fynn pointed. That looks like a convoy of birds! Let's go meet our winged friends, shall we? And whoosh, they flew towards the distant flock led by Tetra breeze.They got more and more excited as they neared the formation of birds. These don't look like any ordinary bird, their wings are so different! exclaimed Fynn.Tetra breeze explained, Those are migratory birds! They must have lost their way in the storm last night. Hearing this, Lily sat up straighter on Tetra breeze's back, her face glowing with determination. We must help them! Let's guide them to Revive Reef and build them a shelter.We can use the cookie packaging and sandwich wrappers in my scrap bag! she suggested enthusiastically. So, they swooped down to land and crafted a makeshift birdhouse with the materials at hand.As the birds fluttered inside their new abode with chirps of relief, the kids high fived each other.After bidding farewell to their winged friends, they flew back home as the sun set, their winged adventure with Tetra breeze making that day one they would never forget.",
            Image: "../assets/tetrabreeze.jpeg"
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
