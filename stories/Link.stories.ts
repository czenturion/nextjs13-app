import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
    title: 'Project/Link',
    component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Click link',
        size: "medium"
    }
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Click link',
        size: "large"
    }
};