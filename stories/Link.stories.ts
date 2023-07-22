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
        label: 'Click',
    }
};

export const Warning: Story = {
    args: {
        primary: true,
        label: 'Delete now',
    }
};