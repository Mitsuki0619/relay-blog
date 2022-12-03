import { RequestParameters, Variables } from "relay-runtime";

const fetchGraphQL = async (query: RequestParameters, variables: Variables) => {
  const response = await fetch("https://graphql-pokemon2.vercel.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query.text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
};

export default fetchGraphQL;
