import React from "react";
import { graphql, GraphQLTaggedNode, usePreloadedQuery } from "react-relay";

export const PokemonList: React.FC<{
  PokemonListQuery: GraphQLTaggedNode;
  preloadedQuery: any;
}> = ({ PokemonListQuery, preloadedQuery }) => {
  const data = usePreloadedQuery(
    graphql`
      query PokemonListNameQuery($first: Int!) {
        pokemons(first: $first) {
          name
        }
      }
    `,
    preloadedQuery
  );

  console.log(data);
  

  return <div>PokemonList</div>;
};
