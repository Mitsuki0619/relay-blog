async function fetchGraphQL(text: string, variables: any) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://graphql-pokemon2.vercel.app", {
    method: "POST",
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;