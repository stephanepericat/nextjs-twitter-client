import consola from "consola";

export const useAppLayout = () => {
  const onMoreClick = (e) => consola.log("onMoreClick", e);
  const onTweetButtonClick = (e) => consola.log("onTweetButtonClick", e);

  return {
    onMoreClick,
    onTweetButtonClick,
  };
};
