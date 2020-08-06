<script>
    import Button from '../src/components/Button.svelte'
    import Component from '../src/Component.svelte'
    import { string, options } from '../src/props'

    const buttonProps = {
        label: string('Label', 'Sign up'),
        color: options('Color', {'Green': 'green', 'Red': 'red', 'Yellow': 'yellow'}),
        size: options('Size', {'Small': 'sm', 'Medium': 'md', 'Large': 'lg'}, 'md')
    }
</script>

<Component let:props {...buttonProps} >
    <!-- <Button /> -->
    <Button {...props}>
        {props.label}
    </Button>

</Component>

