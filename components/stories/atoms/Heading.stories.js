import React from 'react'
import { Heading } from '../../atoms/Heading/Heading';

export default {
  title : 'Atom/Heading',
  component : Heading,
}

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Titulo de app',
};
