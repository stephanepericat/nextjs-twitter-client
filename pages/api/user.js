// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  if (token) {
    // Signed in
    const { name, userid, username, picture } = token;
    res.json({ name, id: userid, username, image: picture });
  } else {
    // Not Signed in
    res.status(401).json(null);
  }

  res.end();
};
