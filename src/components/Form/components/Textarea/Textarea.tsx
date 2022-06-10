import TextField from '@mui/material/TextField';
import React from 'react';
import {FC} from "react";

interface TextareaProps {
    text: string,
    setText:(e: string) => void
}

export const Textarea: FC<TextareaProps> = ({text, setText}) => {
    return (
        <TextField
            id="standard-basic"
            label="message"
            variant="standard"
            value={text}
            onChange={event => setText(event.target.value)}
        />
    );
}
