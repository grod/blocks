<script>
    import Component from "../src/Component.svelte"
    import UserCard from '../src/components/UserCard.svelte'
    import { options } from "../src/props"

    const props = {
        user: options('User', {
            'Gustav': {username: 'grod', name: 'Gustav Buchholtz', avatar: 'https://images.unsplash.com/photo-1561588951-583249cd5060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=400&q=80'},
            'Jackson': {username: 'jax', name: 'Jackson Holiday Wheeler', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=400&q=80'}
        })
    }

</script>

<Component let:props {...props}>
    {#if props.user}
        <UserCard user={props.user} />
    {/if}
</Component>