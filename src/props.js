export const string = (title, value) => ({
    type: 'string', 
    title,
    value
})

export const options = (title, options, value) => ({
    type: 'selector', 
    title,
    options,
    value: value || options[0]
})

export const boolean = (title, value) => ({
    type: 'boolean',
    title,
    value
})
