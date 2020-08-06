<script>
    export let title
    export let image
    export let description
    export let showDescription
</script>

<a href="#" class="group block rounded-lg shadow-lg overflow-hidden bg-gray-700">
    <img src={image} alt="" />
    <div class="px-4 py-3">
        <div class="text-md font-semibold truncate text-white group-hover:underline">{title}</div>
        {#if showDescription}
            <div class="mt-1 mb-1 text-xs font-medium text-gray-500">{description}</div>
        {/if}
    </div>
</a>