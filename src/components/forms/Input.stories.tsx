import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'input',
  },
}

export const WithLabel: Story = {
  args: {
    id: 'input',
    label: 'Input field',
  },
}

export const WithHint: Story = {
  args: {
    ...WithLabel.args,
    placeholder: 'This is a hint',
  },
}

export const Filled: Story = {
  args: {
    ...WithLabel.args,
    value: 'Already filled text',
  },
}
