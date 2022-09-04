import consola from "consola";

export const useAppLayout = () => {
  const onMoreClick = (e) => consola.log("onMoreClick", e);

  return {
    onMoreClick,
  };
};
