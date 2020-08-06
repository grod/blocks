<script>
    export let user
</script>

<a href="#" class="flex w-48 flex-col items-center group block p-4 rounded-lg shadow-lg overflow-hidden bg-gray-700">
    <img class="w-32 h-32 rounded-full object-cover" src={user.avatar} alt="Avatar" />
    <div class="mt-4 w-full">
        <div class="text-sm font-semibold text-center truncate text-white">
            {user.name}
        </div>
        <button class="w-full mt-4 py-1 rounded shadow-md text-xs uppercase font-bold text-white bg-gray-600 hover:bg-gray-500 transition duration-100">Follow</button>
    </div>
</a>