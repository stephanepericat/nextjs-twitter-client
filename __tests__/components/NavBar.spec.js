import { fireEvent, render } from "@testing-library/react";

import NavBar from "../../components/NavBar";

describe("Components > NavBar", () => {
  it("should render a nav", () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);
    expect(container.firstElementChild.tagName).toEqual("NAV");
  });

  it("should redirect to home page", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='home-link']")
    );

    expect(onLinkClick).toHaveBeenCalledWith("/");
  });

  it("should redirect to explore page", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='explore-link']")
    );

    expect(onLinkClick).toHaveBeenCalledWith("/explore");
  });

  it("should redirect to notifications page", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='notifications-link']")
    );

    expect(onLinkClick).toHaveBeenCalledWith("/notifications");
  });

  it("should redirect to messages page", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='messages-link']")
    );

    expect(onLinkClick).toHaveBeenCalledWith("/messages");
  });

  it("should redirect to profile page", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='profile-link']")
    );

    expect(onLinkClick).toHaveBeenCalledWith("/profile");
  });

  it("should call onMoreClick when clicking the 'more' item", async () => {
    const onLinkClick = jest.fn();
    const onMoreClick = jest.fn();

    const args = {
      onLinkClick,
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='more-link']")
    );

    expect(onMoreClick).toHaveBeenCalled();
  });
});
