import React from 'react'

import SignInOut from './SignInOut'

import { AUTHENTICATED, UNAUTHENTICATED } from '../assets/constants/auth-statuses'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SignInOut',
  component: SignInOut,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    status: { control: 'select', options: { AUTHENTICATED, UNAUTHENTICATED } }
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SignInOut {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  signInLabel: 'Sign In',
  signOutLabel: 'Sign Out',
  status: AUTHENTICATED
}
