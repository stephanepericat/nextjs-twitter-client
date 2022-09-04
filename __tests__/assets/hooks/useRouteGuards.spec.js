import { useRouteGuards } from "../../../assets/hooks/useRouteGuards";

import { UNAUTHENTICATED } from "../../../assets/constants/auth-statuses";

describe("Hooks > useRouteGuards", () => {
  describe("redirectToLogin", () => {
    it("should redirect to the login page, if the user is not authenticated", () => {
      const push = jest.fn();
      const { redirectToLogin } = useRouteGuards({ push });

      redirectToLogin(UNAUTHENTICATED);

      expect(push).toHaveBeenCalledWith("/api/auth/signin");
    });
  });
});
