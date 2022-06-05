import React from "react";

import { Button } from './Button';

export default {
    title: 'MyComponents/Button',
    component: Button,
    argTypes: {
        click: { action: 'click' },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disables: false,
    label: 'test',
};

export const Disables = Template.bind({});
Disables.args = {
    disables: true,
    label: 'test',
};