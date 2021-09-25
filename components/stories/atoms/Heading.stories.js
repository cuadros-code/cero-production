import React from 'react'
import { Heading } from '../../atoms/Heading/Heading';

export default {
  title : 'Atom/Heading',
  component : Heading,
}

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Titulo de app',
  color: 'default',
  size: 'md'
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Titulo de app',
  color: 'primary',
  size: 'md'
};

export const SizeMedium = Template.bind({});

SizeMedium.args = {
  children: 'Titulo medium',
  color: 'default',
  size: 'md'
};

export const SizeSmall = Template.bind({});

SizeSmall.args = {
  children: 'Titulo small',
  color: 'default',
  size: 'sm'
};

export const SizeExtraSmall = Template.bind({});

SizeExtraSmall.args = {
  children: 'Titulo small',
  color: 'default',
  size: 'sx'
};