<script>
    let faqs = [
      { question: "What is Ticket Association's client mission?", answer: "Ticket Association's client mission is to provide high-quality services to clients, ensuring their satisfaction and success.", isOpen: false },
      { question: "Is there a fee to apply for Ticket Associates?", answer: "No, there is no fee to apply for Ticket Associates. The application process is free of charge.", isOpen: false },
      { question: "What are the main benefits to signing up with Ticket Associates?", answer: "The main benefits include access to exclusive events, networking opportunities, and professional development resources.", isOpen: false },
      { question: "Is there an extensive verification process?", answer: "Yes, there is a verification process to ensure the authenticity and eligibility of applicants. This helps maintain a high standard of quality within the community.", isOpen: false },
      { question: "Will any confidential information be shared to outside sources?", answer: "No, all confidential information is kept secure and is not shared with outside sources without the explicit consent of the individual.", isOpen: false }
    ];
  
    const toggleFAQ = (index) => {
      faqs = faqs.map((faq, i) => {
        if (i === index) faq.isOpen = !faq.isOpen;
        return faq;
      });
    };
  </script>
  
  <div id="faq" class="w-full mx-auto p-4 sm:p-8 bg-gray-900 text-white font-hind mb-5 text-center">
    <h1 class="text-4xl font-montserrat font-bold mb-4">FAQs</h1>
    <p class="text-md mb-8 font-hind">
      Welcome to our FAQ section! Here you'll find answers to the most common questions about our services and products. If you <br> can't find the information you're looking for, please don't hesitate to contact us. We're here to help!
    </p>  
          {#each faqs as faq, index}
      <div class={`faq mb-4 sm:mb-8 overflow-hidden sm:px-24 ${faq.isOpen ? 'open' : ''}`}>
        <div class="faq-question flex justify-between items-center p-4 cursor-pointer bg-gray-800 border-b border-gray-700 rounded-t transition-all duration-300 hover:bg-gray-700" on:click={() => toggleFAQ(index)}>
          <span>{faq.question}</span>
          <span class="icon flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold transition-transform duration-300">{faq.isOpen ? '▲' : '▼'}</span>
        </div>
        <div class={`faq-answer p-4 bg-gray-700 rounded-b ${faq.isOpen ? 'block' : 'hidden'}`}>
          <p>{faq.answer}</p>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .faq.open .icon {
      transform: rotate(180deg);
    }
  </style>
  