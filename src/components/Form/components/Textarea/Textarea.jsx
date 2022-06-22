import TextField from '@mui/material/TextField';

export const Textarea = ({text, setText}) => {
    return (
        <TextField id="standard-basic" variant="standard" value={text} onChange={event => setText(event.target.value)}/>
    );
}

