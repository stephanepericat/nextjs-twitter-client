import React from "react";

import ProfileBox from "./ProfileBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const story = {
  title: "Example/ProfileBox",
  component: ProfileBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default story;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div
    style={{
      width: "240px",
      height: "calc(100vh - 32px)",
      display: "flex",
      alignItems: "flex-end",
    }}
  >
    <ProfileBox {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  displayName: "Mr. Kitten",
  icon: "https://placekitten.com/50/50",
  logoutLabel: "Sign Out",
  userName: "@mrkitten312",
};
