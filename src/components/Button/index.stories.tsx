import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

// Meta configuration for the Button stories
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorscheme: {
      control: "select",
      options: ["primary"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Main Story: Ghost Button (default example)
export const Main: Story = {
  args: {
    children: "hi",
    variant: "ghost",
  },
};

// Solid Button with primary colorscheme
export const SolidPrimary: Story = {
  args: {
    children: "Solid Primary",
    variant: "solid",
    colorscheme: "primary",
  },
};

// Outline Button with primary colorscheme
export const OutlinePrimary: Story = {
  args: {
    children: "Outline Primary",
    variant: "outline",
    colorscheme: "primary",
  },
};

// Disabled Button Example
export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "solid",
    colorscheme: "primary",
    disabled: true,
  },
};

// Small Button Example
export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "solid",
    size: "sm",
    colorscheme: "primary",
  },
};

// Large Button Example
export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "solid",
    size: "lg",
    colorscheme: "primary",
  },
};
