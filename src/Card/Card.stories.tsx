import { Card } from "./Card";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Card> = {
    title: "card/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
    },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        title: 'Hello',
    },
    render: args => <Card {...args}>Content text</Card>,
};