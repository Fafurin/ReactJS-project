import {FC} from 'react';
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
        </MUIButton>
    );
}