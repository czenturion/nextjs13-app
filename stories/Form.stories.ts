import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

const meta: Meta<typeof Form> = {
    title: 'Project/Form',
    component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>

export const Primary: Story = {
    args: {
        primary: true
    }
};