import { UNAUTHENTICATED } from "../constants/auth-statuses";

export default function loginRedirect(status) {
  const notAuthenticated = status === UNAUTHENTICATED;

  if (notAuthenticated) {
    window.location = "/api/auth/signin";
  }
}
