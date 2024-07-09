<script>
    import Carousel from "./Carousel.svelte";

    const testimonials = [
        {
            text: "Making $200 has never been easier for me. It took just one phone call, lasting about 30 minutes to assist in purchasing tickets for the Atlanta Hawks. I was astonished to receive payment for 4 hours of work with a minute of job completion. It was quick, simple, and incredibly rewarding.",
            author: "Andrew",
            image: "/images/andrew1.svg"
        },
        {
            text: "My wife and I found ourselves without employment during the covid pandemic, and discovering Ticket Associates was a true stroke of luck for us. Not only did we earn $200 by assisting a broker with ticket purchases, but we have also successfully referred 20 individuals so far. This opportunity has become a valuable and consistent source of additional income for us.",
            author: "Andrew",
            image: "/images/andrew1.svg"
        }
        // Add more testimonials as needed
    ];

    let currentSlide = 0;
    let activeBullet = 0;

    function handleSlideChange(event) {
        currentSlide = event.detail.index;
        activeBullet = currentSlide % testimonials.length; // Update active bullet based on current slide index
    }
</script>

<style>
    .bullet {
        width: 10px;
        height: 10px;
        background-color: gray;
        border-radius: 50%;
        margin: 0 5px;
        transition: background-color 0.3s ease;
    }
    .bullet.active {
        background-color: rgb(76, 76, 163);
    }
</style>

<div id="testimonial" class="relative w-full bg-[#1E1E1E] text-white font-hind py-10 overflow-hidden px-4">
    <span class="absolute -left-20 w-1/3 md:w-[500px] h-1/5 md:h-[300px] bg-[#464C58] rounded-full opacity-10 z-10 rotate-[50deg]"></span>
    <span class="absolute -right-20 bottom-0 w-1/3 md:w-[500px] h-1/5 md:h-[300px] bg-[#464C58] rounded-full opacity-10 z-10 rotate-[50deg]"></span>

    <img src="/images/drop.svg" alt="vector" class="h-[95px] fill-current mr-2 pl-10 pt-5"/>

    <div class="flex md:flex-row flex-col mx-2 relative z-10 mt-3">
        <div class="flex items-center mb-32 md:ml-28 md:mr-24">
            <h2 class="text-5xl md:text-5xl font-semibold mb-4 text-center md:text-left">What our <br/>customers<br/> say about us!</h2>
        </div>
        <Carousel autoplay={2000} perPage={1} dots={false} controls={true} on:slideChange={handleSlideChange}>
            {#each testimonials as testimonial}
                <div class="testimonial-card max-w-md w-full md:w-[500px] h-[300px] px-4 mb-4 mx-auto flex flex-col gap-6 relative">
                    <div class="bg-[#464C58] w-full h-full p-4 rounded-lg relative overflow-hidden z-20">
                        <p class="text-sm md:text-base mb-4">{testimonial.text}</p>
                    </div>
                    <img src="/images/polygon.svg" alt="polygon" class="absolute bottom-[10px] left-[14px] z-10"/>
                    <div class="flex items-center mt-3 relative z-30">
                        <img src={testimonial.image} alt={testimonial.author} class="w-8 h-8 rounded-full mr-2"/>
                        <div class="text-xs md:text-sm text-gray-400">{testimonial.author}</div>
                    </div>
                </div>
            {/each}
            <span slot="left-control"></span>
            <span slot="right-control"></span>
        </Carousel>
    </div>

    <div class="bullets flex justify-center mt-6">
        {#each testimonials as _, index}
            <div class="bullet {index <= activeBullet ? 'active' : ''}"></div>
        {/each}
    </div>
</div>
