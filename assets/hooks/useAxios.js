import axios from "axios";

import { TWITTER_API_ROOT } from "../constants/twitter-api";

export const useAxios = (token, baseURL = TWITTER_API_ROOT) => {
  const client = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    client,
  };
};
