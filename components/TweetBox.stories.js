import React from "react";

import TweetBox from "./TweetBox";

import MockData from "../__tests__/__fixtures__/timeline.json";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const story = {
  title: "Example/TweetBox",
  component: TweetBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default story;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ width: "600px", margin: "0 auto" }}>
    {args.data.map((tweet) => {
      const user = args.users.find(({ id }) => id === tweet.author_id);

      return (
        <TweetBox
          key={tweet.id}
          displayName={user.name}
          text={tweet.text}
          userName={user.username}
        />
      );
    })}
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [...MockData.data],
  users: [...MockData.includes.users],
};
