import { useAppLayout } from "../../../assets/hooks/useAppLayout";

import {
  AUTHENTICATED,
  LOADING,
  UNAUTHENTICATED,
} from "../../../assets/constants/auth-statuses";

describe("Hooks > useAppLayout", () => {
  describe("showLayout", () => {
    it("should be true, if the user is authenticated", () => {
      const { showLayout } = useAppLayout(AUTHENTICATED);

      expect(showLayout).toBeTruthy();
    });
  });

  describe("showLoader", () => {
    it("should be true, if the user is not authenticated", () => {
      const { showLoader } = useAppLayout(UNAUTHENTICATED);

      expect(showLoader).toBeTruthy();
    });

    it("should be true, if the user status is loading", () => {
      const { showLoader } = useAppLayout(LOADING);

      expect(showLoader).toBeTruthy();
    });
  });
});
