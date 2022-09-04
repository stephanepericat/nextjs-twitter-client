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

    const expansions = [
      "attachments.media_keys",
      "attachments.poll_ids",
      "author_id",
      "geo.place_id",
      "referenced_tweets.id",
    ];

    const mediaFields = [
      "alt_text",
      "duration_ms",
      "height",
      "media_key",
      "preview_image_url",
      "type",
      "url",
      "width",
    ];

    const placeFields = [
      "contained_within",
      "country",
      "country_code",
      "full_name",
      "geo",
      "id",
      "name",
      "place_type",
    ];

    const pollFields = [
      "duration_minutes",
      "end_datetime",
      "id",
      "options",
      "voting_status",
    ];

    const tweetFields = [
      "created_at",
      "entities",
      "geo",
      "possibly_sensitive",
      "public_metrics",
      "referenced_tweets",
      "reply_settings",
      "source",
      "withheld",
    ];

    const userField = [
      "profile_image_url",
      "protected",
      "url",
      "verified",
      "withheld",
    ];

    try {
      const { data } = await client.get(URI, {
        params: {
          expansions: expansions.join(),
          "media.fields": mediaFields.join(),
          // TODO: user later...
          // "place.fields": placeFields.join(),
          // "poll.fields": pollFields.join(),
          "tweet.fields": tweetFields.join(),
          "user.fields": userField.join(),
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
