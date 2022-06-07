import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Textarea} from './Textarea';

describe('Textarea', () => {
    it('render component', () => {
        render(<Textarea text={'text'}/>)
    })
})
