import { fireEvent, render } from "@testing-library/react";

import SignInOut from "../../components/SignInOut";

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
} from "../../assets/constants/auth-statuses";

const labels = {
  [AUTHENTICATED]: "Sign Out",
  [UNAUTHENTICATED]: "Sign In",
};

describe("Components > SignInOut", () => {
  it("should render a button", () => {
    const onSignIn = jest.fn();
    const onSignOut = jest.fn();

    const args = {
      onSignIn,
      onSignOut,
      signInLabel: labels[UNAUTHENTICATED],
      signOutLabel: labels[AUTHENTICATED],
      status: AUTHENTICATED,
    };

    const { container } = render(<SignInOut {...args} />);
    expect(container).toHaveTextContent(labels[AUTHENTICATED]);
  });

  it("should call onSignIn when user is not authenticated", async () => {
    const onSignIn = jest.fn();
    const onSignOut = jest.fn();

    const args = {
      onSignIn,
      onSignOut,
      signInLabel: labels[UNAUTHENTICATED],
      signOutLabel: labels[AUTHENTICATED],
      status: UNAUTHENTICATED,
    };

    const { container } = render(<SignInOut {...args} />);

    await fireEvent.click(container.querySelector("button"));

    expect(container).toHaveTextContent(labels[UNAUTHENTICATED]);
    expect(onSignIn).toHaveBeenCalled();
  });

  it("should call onSignOut when user is authenticated", async () => {
    const onSignIn = jest.fn();
    const onSignOut = jest.fn();

    const args = {
      onSignIn,
      onSignOut,
      signInLabel: labels[UNAUTHENTICATED],
      signOutLabel: labels[AUTHENTICATED],
      status: AUTHENTICATED,
    };

    const { container } = render(<SignInOut {...args} />);

    await fireEvent.click(container.querySelector("button"));

    expect(onSignOut).toHaveBeenCalled();
  });
});
