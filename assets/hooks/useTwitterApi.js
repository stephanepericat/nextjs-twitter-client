import consola from "consola";

export const useTwitterApi = (client) => {
  const getTimeline = async () => {
    try {
      const { data } = await client.get("/api/tweets/timeline");
      return data;
    } catch (e) {
      consola.error(e.message);
      return null;
    }
  };

  return {
    getTimeline,
  };
};
