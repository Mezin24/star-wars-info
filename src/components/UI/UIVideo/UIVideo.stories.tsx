import type { Meta, StoryObj } from "@storybook/react"
import UIVideo, { IUIVideoProps } from "./UIVideo"
import video from "./video/han-solo.mp4"

const meta = {
  title: "UI-KIT/UIVideo",
  component: UIVideo,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof UIVideo>

export default meta
type Story = StoryObj<typeof meta>

const props: IUIVideoProps = {
  src: video,
  playbackRate: 1,
}

export const Promary: Story = {
  args: {
    ...props,
  },
}
