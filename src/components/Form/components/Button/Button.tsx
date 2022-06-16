import {FC} from 'react';
import React from 'react';
import MUIButton from '@mui/material/Button';

interface ButtonProps {
    disabled?: boolean,
    click?: () => void,
    children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({children, disabled = false, click}) => {
    return (
        <MUIButton
            disabled={disabled}
            variant="contained"
            type="submit"
            onClick={click}
        >
            {children}
        </MUIButton>
    );
}