<script>
    let inj = {...$$restProps}

    let props = {}
    $: {
        for (let key in inj) {
            // console.log('key', key)
            props[key] = inj[key].value
        }
    }
</script>

<div class="flex flex-col h-screen">

    <div class="flex-1 flex items-center justify-center">
        <div class="p-4">
            <slot {props} />
        </div>
    </div>

    <div class="grid gap-2 p-4 items-center text-xs bg-gray-900 text-gray-200" style="grid-template-columns: auto 1fr;">
        {#each Object.keys(inj) as key}
            <div>{inj[key].title || key}</div>
            <div>
                {#if inj[key].type === 'string'}
                    <input class="px-3 py-1 rounded-md bg-gray-800 focus:outline-none focus:bg-gray-700" bind:value={inj[key].value}>
                {/if}
                {#if inj[key].type === 'boolean'}
                    <input type="checkbox" class="px-1 py-1 rounded-md bg-gray-800 focus:outline-none focus:bg-gray-700" bind:checked={inj[key].value}>
                {/if}
                {#if inj[key].type === 'selector'}
                    <select class="px-3 py-1 rounded-md bg-gray-800 focus:outline-none focus:bg-gray-700" bind:value={inj[key].value}>
                        {#if Array.isArray(inj[key].options)}
                            {#each inj[key].options as option }
                                <option value={option}>{option}</option>
                            {/each}
                        {:else}
                            {#each Object.keys(inj[key].options) as option }
                                <option value={inj[key].options[option] }>{option}</option>
                            {/each}
                        {/if}
                    </select>
                {/if}
            </div>
        {/each}
    </div>

</div>