<template>
    <div class="flex flex-col w-screen">
        <div class="h-auto w-screen relative bg-[#A7E7D3]">
            <img src="../assets/icons/levelfirst.svg" class="h-auto w-screen">
            <img src="../assets/icons/Revive-Reef.svg" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 md:h-12 lg:h-16" />
        </div>
        <div class="bg-[#A7E7D3] h-fit w-screen flex flex-col items-center px-4 md:px-24 pb-24">
            <router-link to="/scanner" class="mt-24 w-fit h-fit px-24 py-2 rounded-md bg-[#EE6F2D] font-medium text-white">
                Scan your QR code now
            </router-link>
            <p class="mt-24 text-center font-normal">In the enchanting world of <b>Revive Reef</b>, a mysterious island in the heart of the ocean, a magical transformation occurs. All the trash that washes ashore is not discarded but given a second chance at life. This island is a beacon of hope, where refuse is reborn as lovable and mischievous toy monsters known as</p>
            <img class="mt-24" src="../assets/icons/scrapster.svg" alt="">
            <div class="mt-24">
                <div class="flex flex-row carousel-row">
                    <div class="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img src="../assets/icons/Monster1.svg" alt="Monster 1">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/icons/Monster2.svg" alt="Monster 2">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/icons/Monster3.svg" alt="Monster 3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:h-96 h-40 w-screen relative">
            <img src="../assets/icons/level2.svg" class="h-auto w-screen absolute">
            <div class="flex flex-col h-full">
                <div class="h-1/2 bg-[#A7E7D3]"></div>
                <div class="h-1/2"></div>
            </div>
        </div>
        <div class="mb-24 flex flex-col md:flex-row justify-center items-center px-4 md:px-24 md:mt-56 lg:mt-96 mt-32">
            <p class="md:w-2/3 font-normal md:mr-10 mb-16">
                The island has a bustling port: <b>Driftwood Harbor</b>.
    Our story follows two siblings, Lily and Finn, who discover this magical island during a family vacation. <b>Lily and Finn</b> stumble upon the ancient secret of awakening the Scrapsters. They craft toys from discarded materials found on the beach and bring them to life using magical Coral Signs (QR codes), a rare and powerful substance unique to Revive Reef.
            </p>
            <img src="../assets/icons/kids.svg" class="md:w-1/3 w-1/2" />
        </div>

        <div class="lg:h-[55rem] md:h-[30rem] h-[7rem] w-screen relative">
            <img src="../assets/icons/Island.svg" class="h-auto w-screen absolute">
            <div class="flex flex-col h-full">
                <div class="h-1/2 "></div>
                <div class="h-1/2 bg-[#ACE6F1]"></div>
            </div>
        </div>

        <div class="pb-24 flex flex-col bg-[#ACE6F1] justify-center items-center px-4 md:px-24 md:pt-36 lg:pt-48 pt-48 pb-16">
            <div class="flex flex-col md:flex-row items-center">
                <img src="../assets/icons/Monster5.svg" class="md:w-1/3 md:mr-10 w-1/2 mb-10" />
                <p class="md:w-2/3 font-normal">
                    As the <b>Scrapsters</b> come to life, they reveal their distinct personalities and abilities based on the materials they were made from. Together with their new friends, Lily and Finn embark on extraordinary adventures both above and below the ocean's surface. These adventures are driven by their mission to <b>restore the health of the ocean</b>, which has been suffering from pollution and neglect.
                </p>
            </div>
            
            <router-link to="/receipts" class="mt-24 w-fit h-fit px-24 py-2 rounded-md bg-[#EE6F2D] font-medium text-white">
                Check out your receipts 
            </router-link>
        </div>

        <div class="h-auto w-screen relative bg-[#ACE6F1]">
            <img src="../assets/icons/levellast.svg" class="h-auto w-screen">
            <div class="absolute top-1">
                <div class="flex flex-col justify-center items-center">
                    <p class="mb-24 md:mb-0 font-medium text-white md:mt-40 lg:mt-64 mt-32 pl-4 pr-4">
                        The Scrapsters, with their unique talents, help tackle environmental challenges, clean up the ocean, and teach valuable lessons about the importance of recycling, upcycling, and protecting our planet. In this magical universe, the Scrapsters and their human friends prove that even the most overlooked and discarded things can be transformed into something beautiful, valuable, and full of life.
                    </p>
                    <img src="../assets/icons/Monster6.svg" class="mb-24 hidden md:block mt-16 w-1/3" alt="">
                    <div class="h-fit w-screen hidden md:flex flex-col items-center px-4 md:px-24 pb-24">
                        <img src="../assets/icons/scrapster.svg" alt="Scrapsters" class="mt-8">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


</script>

<style>
.carousel-row {
  display: flex;
  justify-content: center;
}

.carousel {
  width: 33%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  width: 300%;
  animation: carousel 15s infinite;
}

.carousel-item {
  width: 33.3333%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

@keyframes carousel {
  0%, 20% {
    transform: translateX(0);
  }

  30%, 50% {
    transform: translateX(-33.333%);
  }

  60%, 80% {
    transform: translateX(-66.6666%);
  }

  90%, 100%{
    transform: translateX(0);
  }
}
</style>