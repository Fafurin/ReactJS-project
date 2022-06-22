import {FC} from 'react';
<<<<<<< HEAD
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
=======
import MUIButton from '@mui/material/Button';

interface ButtonProps {
    label: string,
    disabled?: boolean,
    click?: () => void
}

export const Button: FC<ButtonProps> = ({label, disabled = false, click = () => null}) => {
    return (
        <MUIButton variant="contained" disabled={disabled} onClick={click} type="submit">
            {label}
>>>>>>> master
        </MUIButton>
    );
}