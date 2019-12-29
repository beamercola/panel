import auth0 from "../../lib/auth0";
import { gql } from "apollo-boost";
import client from "../lib/apollo";

export default async function getBoards(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);

    return client
      .query({
        query: gql`
          query Index {
            boards {
              id
              name
            }
          }
        `
      })
      .then(result => console.log());
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
