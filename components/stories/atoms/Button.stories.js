import React from 'react'
import { Button } from '../../atoms/Button/Button'

export default {
  title : 'Atom/Button',
  component : Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
  children: 'Secondary',
}