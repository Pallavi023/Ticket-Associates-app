<script>
    let menuItems = ["Home", "Mission", "How it Works", "FAQ", "Testimonial", "Contact"];

    function scrollToSection(id) {
        if (id === "how-it-works") {
            id = "work"; // Adjust the ID here to match your actual section ID
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<nav class="fixed top-0 left-0 right-0 z-10 bg-[#1E1E1E] text-white flex justify-between items-center px-8 py-4 shadow-md">
    <div class="flex items-center">
        <img src="/images/logo.svg" alt="Logo" class="h-10 mr-2">
    </div>
    <ul class="hidden md:flex space-x-9">
        {#each menuItems as item}
            <li 
                class="cursor-pointer hover:underline"
                on:click={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
            >
                {item}
            </li>
        {/each}
    </ul>
    <div class="flex items-center space-x-4">
        <button class="px-4 py-2 rounded-full bg-white text-black">Log In</button>
        <button class="px-4 py-2 rounded-full bg-blue-500 text-white">Sign Up</button>
    </div>
</nav>
