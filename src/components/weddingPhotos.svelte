<script>
    import Gallery from "svelte-image-gallery";
    export let weddingImages;

    function HandleClick(e) 
    {
        console.log(
            `src: ${e.detail.src}, alt: ${e.detail.alt}, loading: ${e.detail.loading}, class: ${e.detail.class}`
        );
    }
    
</script>
<Gallery gap={10} maxColumnWidth={250} on:click={HandleClick} hover={true} loading="lazy">
    {#each weddingImages as image}
        <img src={image.thumbnailURL} alt="">
    {/each}
</Gallery>