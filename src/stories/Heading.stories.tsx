import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Heading, HeadingType, IHeading } from "./Heading";

export default {
  title: "Example/Heading",
  component: Heading,
} as Meta;

const Template: Story<IHeading> = (args) => <Heading {...args} />;

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  type: HeadingType.H1,
  text: "Heading",
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  type: HeadingType.H2,
  text: "Heading",
};

export const HeadingThree = Template.bind({});
HeadingThree.args = {
  type: HeadingType.H3,
  text: "Heading",
};
