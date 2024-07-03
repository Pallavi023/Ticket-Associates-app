<script>
    let testimonials = [
        {
            text: "Making $200 has never been easier for me. It took just one phone call, lasting about 30 minutes to assist in purchasing tickets for the Atlanta Hawks. I was astonished to receive payment for 4 hours of work with a minute of job completion. It was quick, simple, and incredibly rewarding.",
            name: "Andrew",
            image: "/images/andrew1.svg"
        },
        {
            text: "My wife and I found ourselves without employment during the covid pandemic, and discovering Ticket Associates was a true opportunity for us. Not only did we earn $200 by assisting a buyer with ticket purchases but we have also successfully referred 20 individuals so far. This opportunity has become a valuable and consistent source of additional income for us.",
            name: "Andrew",
            image: "/images/andrew2.svg"
        }
    ];
</script>

<style>
    .container {
        background-color: #1F2937;
        color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        max-width: 900px;
        margin: auto;
    }

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .header svg {
        margin-right: 1rem;
        fill: #3B82F6;
    }

    .header h2 {
        font-size: 1.875rem;
        font-weight: 600;
    }

    .testimonial {
        background-color: #374151;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    .testimonial p {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .testimonial .author {
        display: flex;
        align-items: center;
    }

    .testimonial img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .testimonial .name {
        font-size: 0.875rem;
        color: #9CA3AF;
    }
</style>

<div class="container">
    <div class="header">
        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-7H7a1 1 0 00-.893.553l-1 2A1 1 0 007 14h2v2a1 1 0 002 0v-2h2a1 1 0 00.893-1.447l-1-2A1 1 0 0011 11h-2V7a1 1 0 00-2 0v4z"/>
        </svg>
        <h2>What our customers say about us!</h2>
    </div>
    {#each testimonials as testimonial}
        <div class="testimonial">
            <p>{testimonial.text}</p>
            <div class="author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div class="name">{testimonial.name}</div>
            </div>
        </div>
    {/each}
</div>
