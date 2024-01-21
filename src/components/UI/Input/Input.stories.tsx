import Input from "."
import { IInputProps } from "./Input"
import type { Meta, StoryObj } from "@storybook/react"
import { useArgs } from "@storybook/preview-api"

const meta = {
  title: "UI-KIT/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs<typeof ctx.args>()

      const handleChange = (value: string) => {
        ctx.args.handleChange?.(value)

        // Check if the component is controlled
        if (ctx.args.value !== undefined) {
          setArgs({ value })
        }
      }

      return <Story args={{ ...ctx.args, handleChange }} />
    },
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// const props: IInputProps = {
//   placeholder: "Placeholder",
// }

export const Primary: Story = {
  args: {
    value: "",
    placeholder: "Placeholder",
  },
  render: function Component(args) {
    const [, setArgs] = useArgs()

    const onValueChange = (value: string) => {
      // Call the provided callback
      // This is used for the Actions tab
      args.handleChange?.(value)

      // Update the arg in Storybook
      setArgs({ value })
    }

    // Forward all args and overwrite onValueChange
    return <Input {...args} handleChange={onValueChange} />
  },
}
