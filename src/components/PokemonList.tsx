import React from "react";
import { graphql, GraphQLTaggedNode, usePreloadedQuery } from "react-relay";

export const PokemonList: React.FC<{
  PokemonListQuery: GraphQLTaggedNode;
  preloadedQuery: any;
}> = ({ PokemonListQuery, preloadedQuery }) => {
  const data = usePreloadedQuery(PokemonListQuery, preloadedQuery);

  return <div>PokemonList</div>;
};
