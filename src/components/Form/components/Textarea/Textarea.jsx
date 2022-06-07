export const Textarea = ({text, setText}) => {
    return (
        <textarea value={text} onChange={event => setText(event.target.value)}/>
    );
}
