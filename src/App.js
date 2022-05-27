import React from 'react';
import { Form } from './components/classes/Form/Form';
import { Form as FormFunc} from './components/funcs/Form/Form';
import { Toggle } from './components/funcs/Toggle/Toggle';

export const App = () => {
    return (
        <>
            <Form/>
            <hr/>
            <FormFunc/>
            <hr/>
            <Toggle/>
        </>
    )
}