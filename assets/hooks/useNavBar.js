import consola from "consola";

export const useNavBar = (router) => {
  const onLinkClick = (href) => router.push(href);
  const onMoreClick = (e) => consola.log("onMoreClick", e);

  return {
    onLinkClick,
    onMoreClick,
  };
};
