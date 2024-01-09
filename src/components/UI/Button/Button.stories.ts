import Button, { IButtonProps } from "./Button"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "UI-KIT/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const props: IButtonProps = {
  onClick: () => {},
  theme: "dark",
  children: "Click Me",
}

export const Dark: Story = {
  args: {
    ...props,
    theme: "dark",
  },
}

export const Light: Story = {
  args: {
    ...props,
    theme: "light",
  },
}

export const Disabled: Story = {
  args: {
    ...props,
    disabled: true,
  },
}
