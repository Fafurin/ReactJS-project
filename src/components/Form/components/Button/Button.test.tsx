import React from "react";
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {waitFor} from "@storybook/testing-library";
import {Button} from './Button';


describe('Button', () => {
    it('render component', () => {
        render(<Button label="test"/>);
    });

    it('render with snapshot', () => {
        const {asFragment} = render(<Button label="test"/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render component with text', () => {
        render(<Button label="test"/>);
        expect(screen.getByText(/test/)).toBeInTheDocument();
    });

    it('render multiply components', () => {
        render(
            <>
                <Button label="test"/>
                <Button label="send"/>
            </>
        );
        expect(screen.queryAllByRole('button').length).toBe(2);
    });

    it('button is disabled', () => {
        render(<Button label="test" disabled/>);
        expect(screen.getByText('test')).toBeDisabled();
    });

    it('button has style color red', () => {
        render(<Button label="test"/>);
        expect(screen.getByText('test')).toHaveStyle({color: 'red'});
    });

    it('button click with userEvent', async () => {
        const mockHandler = jest.fn();
        render(<Button label="test" click ={mockHandler}/>);
        await userEvent.click(screen.getByText("test"));
        expect(mockHandler).toHaveBeenCalledTimes(1);
    })

    it('button async click', async () => {
        const mockHandler = jest.fn();
        render(<Button label="test" click={() => setTimeout(mockHandler, 1500)}/>);
        const button = screen.getByRole('button');
        await userEvent.click(button);
        await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
            timeout: 1600,
        });
    })

    it('test example', async () => {
        const onChange = jest.fn();
        render(<input type="checkbox" onChange={onChange}/>);
        const checkbox = screen.getByRole('checkbox');
        await userEvent.dblClick(checkbox);
        expect(checkbox).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();

    })

});
