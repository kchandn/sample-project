function Message() {
    const name = 'Chandan';
    return <h1>Hello {name ? name : 'world'}</h1>
}

export default Message;