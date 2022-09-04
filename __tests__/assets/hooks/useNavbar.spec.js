import { useNavBar } from "../../../assets/hooks/useNavBar";

describe("Hooks > useNavBar", () => {
  describe("onLinkClick", () => {
    it("should push a new state on the router", () => {
      const push = jest.fn();
      const url = "/messages";

      const { onLinkClick } = useNavBar({ push });
      onLinkClick(url);

      expect(push).toHaveBeenCalledWith(url);
    });
  });
});
