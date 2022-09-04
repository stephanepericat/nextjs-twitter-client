import {
  AUTHENTICATED,
  LOADING,
  UNAUTHENTICATED,
} from "../constants/auth-statuses";

import consola from "consola";

export const useAppLayout = (status) => {
  const onMoreClick = (e) => consola.log("onMoreClick", e);
  const onTweetButtonClick = (e) => consola.log("onTweetButtonClick", e);

  const showLayout = status === AUTHENTICATED;
  const showLoader = status === LOADING || status === UNAUTHENTICATED;

  return {
    onMoreClick,
    onTweetButtonClick,
    showLayout,
    showLoader,
  };
};
