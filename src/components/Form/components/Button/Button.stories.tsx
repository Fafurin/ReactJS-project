import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

import { Button } from './Button';

export default {
    title: 'MyComponents/Button',
    component: Button,
    argTypes: {
        click: { action: 'click' },
    },
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
    disables: false,
    label: 'test',
};

export const Disables = Template.bind({});
// @ts-ignore
Disables.args = {
    disables: true,
    label: 'test',
};