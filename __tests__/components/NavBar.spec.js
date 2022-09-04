import { fireEvent, render } from "@testing-library/react";

import NavBar from "../../components/NavBar";

describe("Components > NavBar", () => {
  it("should render a nav", () => {
    const onMoreClick = jest.fn();

    const args = {
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);
    expect(container.firstElementChild.tagName).toEqual("NAV");
  });

  it("should call onMoreClick when clicking the 'more' item", async () => {
    const onMoreClick = jest.fn();

    const args = {
      onMoreClick,
    };

    const { container } = render(<NavBar {...args} />);

    await fireEvent.click(
      container.querySelector("a[data-test-id='more-link']")
    );

    expect(onMoreClick).toHaveBeenCalled();
  });
});
