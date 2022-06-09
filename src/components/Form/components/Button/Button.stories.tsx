// @ts-ignore
import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import { Button } from './Button';

export default {
    title: 'MyComponents/Button',
    component: Button,
    argTypes: {
        click: { action: 'click' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({}) as ComponentStory<typeof Button>;
Primary.args = {
    label: 'test',
    disabled: false,
};

export const Disables = Template.bind({}) as ComponentStory<typeof Button>;
Disables.args = {
    label: 'test',
    disabled: true,
};