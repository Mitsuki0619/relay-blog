import { Variables } from "relay-runtime";

const fetchGraphQL = async (query: string, variables: Variables) => {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://graphql-pokemon2.vercel.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
};

export default fetchGraphQL;