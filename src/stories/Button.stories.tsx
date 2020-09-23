import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import * as S from '../style-components'
import { Button, IButton } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: S.ButtonSize.LARGE,
  label: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
  size: S.ButtonSize.MEDIUM,
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: S.ButtonSize.SMALL,
  label: 'Button'
};
