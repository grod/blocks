<script>
    export let color
    export let size = 'md'

    const sizes = {
        sm: 'px-3 py-1 border-b-2 font-medium text-xs',
        md: 'px-4 py-1 border-b-2 text-md',
        lg: 'px-5 py-2 border-b-4 font-semibold text-xl'
    }
    const colors = {
        green: 'bg-green-300 text-green-800 border-green-600 hover:bg-green-400 hover:text-green-900',
        red: 'bg-red-300 text-red-800 border-red-500 hover:bg-red-400 hover:text-red-900',
        yellow: 'bg-yellow-300 text-yellow-800 border-yellow-500 hover:bg-yellow-400 hover:text-yellow-900'
    }

</script>

<button class="{sizes[size]} {colors[color]} rounded-md shadow transition duration-150">
    <slot />
</button>