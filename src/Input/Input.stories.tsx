import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import React from "react";

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {};

export const WithProp: Story = {
    render: () => <Input value="value" onChange={() => {}}/>,
};