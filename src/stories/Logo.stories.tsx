import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Logo, ILogo } from "./Logo";

export default {
  title: "Example/Logo",
  component: Logo,
} as Meta;

const Template: Story<ILogo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Logo",
};
