<script>
  let faqs = [
    { question: "What is Ticket Association's client mission?", answer: "Ticket Association's client mission is to provide high-quality services to clients, ensuring their satisfaction and success.", isOpen: false },
    { question: "Is there a fee to apply for Ticket Associates?", answer: "There is absolutely no fee to apply. You simply fill out the form along with proof of identification and a Ticket Associates representative will reach out to you directly.", isOpen: false },
    { question: "Is there an extensive verification process?", answer: "Potential customers will be required to upload government photo identification for verification purposes. This process ensures each client has their own personal secured customer profile that no one else can access.", isOpen: false },
    { question: "Will any confidential information be shared to outside sources?", answer: "Aside from sharing information with the sports team, confidential information will not be shared at any point. Your internal partnering ticket broker that you agree to sign up with will have access to all relevant information in your secured customer file.", isOpen: false },
    { question: "How long does it take for the application to be approved?", answer: "Information must be filled out and identification verification must be presented. Once all relevant fields are filled out to the best of your ability, the process takes 3-5 business days to complete the scan through.", isOpen: false },
    { question: "Am I eligible if I already have season tickets?", answer: "When you sign up with Ticket Associates it is required that you are not a current season ticket holder. Current season ticket holders will not be approved and will not have access to the program and its benefits.", isOpen: false },
    { question: "What if I refer other people to this program?", answer: "Ticket Associates does have a rewarding referral program for existing clients. For more information, please fill out the form in the referral section below.", isOpen: false },
  ];

  const toggleFAQ = (index) => {
    faqs = faqs.map((faq, i) => {
      if (i === index) faq.isOpen = !faq.isOpen;
      return faq;
    });
  };
</script>

<div id="faq" class="w-full mx-auto bg-[#1E1E1E] text-white font-hind px-4 sm:px-6 lg:px-8">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl font-montserrat font-bold mb-4">FAQs</h1>
    <p class="text-md mb-8 font-hind text-center">
      Welcome to our FAQ section! Here you'll find answers to the most common questions about our services and products. If you<br> can't find the information you're looking for, please don't hesitate to contact us. We're here to help!
    </p>
  </div>
  
  {#each faqs as faq, index}
    <div class={`faq mb-4 sm:mb-8 overflow-hidden w-full sm:px-24 ${faq.isOpen ? 'open' : ''}`}>
      <div class="faq-question flex justify-between items-center p-4 cursor-pointer bg-[#292D34] border-b border-gray-700 rounded-t transition-all duration-300 hover:bg-[#464C58]" on:click={() => toggleFAQ(index)}>
        <span class={faq.isOpen ? 'text-[#E8E8E8]' : ''}>{faq.question}</span>
        <span class="icon flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white transition-transform duration-300">
          <img src={faq.isOpen ? '/images/cancel.svg' : '/images/cancel.svg'} alt="toggle icon" class="w-4 h-4 sm:w-5 sm:h-5">
        </span>
      </div>
      
      <div class={`faq-answer p-4 bg-[#464C58] rounded-b ${faq.isOpen ? 'block' : 'hidden'} text-left`}>
        <p class="text-[#E8E8E8]">{faq.answer}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .faq.open .icon {
    transform: rotate(180deg);
  }
  .icon img {
    display: block;
  }
</style>
