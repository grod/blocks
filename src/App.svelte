<!-- <script>
  import { Router } from '@sveltech/routify/runtime';
  import { routes } from '../.routify/routes';
</script>

<Router {routes} /> -->
<script>
    import blocks from '../../.blocks'
    // import blocks from './blocks'

    console.log(blocks)

    let selectedBlock

    let mode = 'dark'
    const switchMode = () => mode = mode === 'dark' ? 'light' : 'dark'
</script>

<div class="flex h-screen overflow-hidden bg-gray-900">
    <div class="flex flex-col border-r border-gray-800 bg-gray-900">
        <div class="flex-1 py-4 px-8 space-y-2 overflow-auto">
            {#each Object.keys(blocks) as block}
                <button on:click={() => selectedBlock = blocks[block]} class="block text-sm font-medium { selectedBlock === blocks[block] ? 'font-bold text-white' : 'text-gray-500' } focus:outline-none">
                    {blocks[block].name.match(/<(.*)>/)[1]}
                </button>
            {/each}
        </div>

        <div class="py-2 px-8 border-t text-center text-sm border-gray-800 text-gray-300">
            <button on:click={switchMode} class="focus:outline-none">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    {#if mode === 'dark'}
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                    {:else}
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    {/if}
                </svg>
            </button>
        </div>

    </div>
    <div class="flex flex-1 flex-col overflow-y-auto">

        {#if selectedBlock}
            <div class="flex-1 {mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}">
                <svelte:component this={selectedBlock} />
            </div>
        {/if}
    </div>
</div>