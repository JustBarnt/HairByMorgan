<script lang="ts">
    //@ts-nocheck
    import Siema from "siema";
    import { createEventDispatcher, onMount } from "svelte";

    export let perPage: number = 3;
    export let loop: boolean = true;
    export let autoplay: number = 0;
    export let duration: number = 200;
    export let easing: string = "ease-out";
    export let startIndex: number = 0;
    export let draggable: boolean = false;
    export let multipleDrag: boolean = false;
    export let dots: boolean = false;
    export let controls: boolean = true;
    export let threshold: number = 20;
    export let rtl: boolean = false;

    let currentIndex: number = startIndex;

    let siema;
    let controller;
    let timer;

    const dispatch = createEventDispatcher();

    $: pips = controller ? controller.innerElements : [];
    $: currentPerPage = controller ? controller.perPage : perPage;
    $: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : [];

    onMount(() => 
    {
        controller = new Siema({
            selector: siema,
            perPage: typeof perPage === "object" ? perPage : Number(perPage),
            loop,
            duration,
            easing,
            startIndex,
            draggable,
            multipleDrag,
            threshold,
            rtl,
            onChange: handleChange
        });

        if(autoplay) timer = setInterval(right, autoplay);

        return () => 
        {
            autoplay && clearInterval(timer);
            controller.destroy();
        };
    });

    export function isDotActive(currentIndex, dotIndex)
    {
        if(currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex * currentPerPage && currentIndex < (dotIndex + currentPerPage)+currentPerPage;
    }

    export function left()
    {
        controller.prev();
    }

    export function right()
    {
        controller.next();
    }

    export function go(index)
    {
        controller.goTo(index);
    }

    export function pause()
    {
        clearInterval(timer);
    }

    export function resume()
    {
        if(autoplay) timer = setInterval(right, autoplay);
    }
    
    function handleChange(event)
    {
        currentIndex = controller.currentSlide;
        dispatch("change", 
            { 
                currentSlide: controller.currentSlide,
                slideCount: controller.innerElements.length
            });
    }

    function resetInterval(node, condition)
    {
        function handleReset(event)
        {
            pause();
            resume();
        }

        if(condition) node.addEventListener("click", handleReset);

        return{
            destroy()
            {
                node.removeEventListener("click", handleReset);
            }
        };
    }
</script>


<div class="carousel">
    {#if controls }
        <button class="left" aria-label="left" on:click={left} use:resetInterval={autoplay}>
            <slot name="left-control"></slot>
        </button>
    {/if}
    <div class="slides" bind:this={siema}>
        <slot></slot>
    </div>
    {#if controls}
        <button class="right" aria-label="right" on:click={right} use:resetInterval={autoplay}>
            <slot name="right-control"></slot>
        </button>
    {/if}
    {#if dots}
        <ul>
            {#each { length: totalDots } as _, i}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={() => go(i*currentPerPage) } class='{isDotActive(currentIndex, i) ? "active" : ""}}'> </li>
            {/each}
        </ul>
    {/if}
</div>

<style lang="scss">
    .carousel {
        display: flex;
        flex-flow: row nowrap;
		width: 100%;
		justify-content: center;
		align-items: center;
        padding: 3.5rem;
	}

	button {
		z-index: 50;
		border: none;
		background-color: transparent;

        &:focus {
            outline: none;
        }
	}
    
	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
        align-content: center;
		width: 100%;
		padding: 0;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: black;
		height: 8px;
		width: 8px;
	}
</style>