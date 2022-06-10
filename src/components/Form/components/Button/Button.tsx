import {FC} from 'react';
import React from 'react';
import MUIButton from '@mui/material/Button';

interface ButtonProps {
    label: string,
    disabled?: boolean,
    click?: () => void
}

export const Button: FC<ButtonProps> = ({label, disabled = false, click}) => {
    return (
        <MUIButton
            disabled={disabled}
            variant="contained"
            type="submit"
            onClick={click}
        >
            {label}
        </MUIButton>
    );
}