import { UNAUTHENTICATED } from "../constants/auth-statuses";

export const useRouteGuards = (router) => {
  const redirectToLogin = (status) => {
    if (status === UNAUTHENTICATED) {
      router.push("/api/auth/signin");
    }
  };

  return {
    redirectToLogin,
  };
};
