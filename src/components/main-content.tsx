function MainContent() {
    const name = 'Chandan Kumar';
    return (
        <p>Hello {name ? name : ''}, Welcome to Trivium Family</p>
    );
}

export default MainContent;