export const useTwitterApi = (client) => {
  const getTimeline = async () => {
    try {
      const { data } = await client.get("/api/tweets/timeline");
      return data;
    } catch (e) {
      return null;
    }
  };

  return {
    getTimeline,
  };
};
