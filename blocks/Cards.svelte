<script>
    import Card from '../src/components/Card.svelte'
    import Component from '../src/Component.svelte'
    import { boolean, string } from '../src/props'
    // import { boolean, string, options } from '../src/props'

    const props = {
        image: string('Image URL', 'good-boys.jpg'),
        title: string('Title', 'Good Boys'),
        description: string('Description', 'Three 6th grade boys ditch school and embark on an epic journey while carrying accidentally stolen drugs, being hunted by teenage girls, and trying to make their way home in time for a long-awaited party.'),
        showDescription: boolean('Show Description', false),

        // title: options('Color', ['green', 'red'], 'red'),
        // size: options('Size', {'Small': 'sm', 'Medium': 'md', 'Large': 'lg'}, 'lg')
    }
</script>

<Component let:props {...props}>
    <div class="w-64">
        <Card {...props} />
    </div>
</Component>