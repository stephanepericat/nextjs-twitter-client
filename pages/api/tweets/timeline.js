// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";
import { useAxios } from "../../../assets/hooks/useAxios";

import { TIMELINE_REVERSE_CHRONOLOGICAL } from "../../../assets/constants/twitter-api";

export default async (req, res) => {
  const token = await getToken({ req });

  if (token) {
    const { userid, accessToken } = token;

    const URI = TIMELINE_REVERSE_CHRONOLOGICAL.replace(":id", userid);
    const { client } = useAxios(accessToken);

    try {
      const { data } = await client.get(URI, {
        params: {
          expansions: "author_id",
        },
      });

      res.json(data);
    } catch (e) {
      res.status(500);
    }
  } else {
    res.status(401);
  }

  res.end();
};
