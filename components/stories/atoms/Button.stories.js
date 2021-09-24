import React from 'react'
import { Button } from '../../atomic/atoms/Button/Button'

export default {
  title : 'Atom/Button',
  component : Button,
}

export const Primary = () => <Button type='primary'>Primary</Button>

export const Secondary = () => <Button type='secondary'>Secondary</Button>