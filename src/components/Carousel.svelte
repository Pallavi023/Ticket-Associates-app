<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import Siema from 'siema';
  
    export let perPage = 1;
    export let loop = true;
    export let autoplay = 2000;
    export let duration = 200;
    export let easing = 'ease-out';
    export let startIndex = 0;
    export let draggable = true;
    export let multipleDrag = true;
    export let dots = true;
    export let controls = true;
    export let threshold = 20;
    export let rtl = false;
  
    let siema;
    let timer;
    let currentIndex = startIndex;
  
    const dispatch = createEventDispatcher();
  
    onMount(() => {
      siema = new Siema({
        selector: '.slides',
        perPage,
        loop,
        duration,
        easing,
        startIndex,
        draggable,
        multipleDrag,
        threshold,
        rtl,
        onChange: () => {
          currentIndex = siema.currentSlide;
          dispatch('change', { currentIndex });
        }
      });
  
      if (autoplay) {
        timer = setInterval(() => siema.next(), autoplay);
      }
  
      return () => {
        if (autoplay) {
          clearInterval(timer);
        }
        siema.destroy();
      };
    });
  
    function goTo(index) {
      siema.goTo(index);
    }
  
    function prev() {
      siema.prev();
    }
  
    function next() {
      siema.next();
    }
  
    function resetAutoplay() {
      if (autoplay) {
        clearInterval(timer);
        timer = setInterval(() => siema.next(), autoplay);
      }
    }
</script>
  
<div class="carousel">
    <div class="slides" on:click={resetAutoplay}>
        <slot></slot>
    </div>
    {#if controls}
        <button class="left" on:click={prev} aria-label="previous slide">
            <slot name="left-control"></slot>
        </button>
        <button class="right" on:click={next} aria-label="next slide">
            <slot name="right-control"></slot>
        </button>
    {/if}
    {#if dots}
        <ul>
            {#if siema?.innerElements}
                {#each Array(Math.ceil(siema.innerElements.length / perPage)) as _, i}
                    <li class={currentIndex === i ? 'active' : ''} on:click={() => goTo(i)}></li>
                {/each}
            {/if}
        </ul>
    {/if}
</div>
  

