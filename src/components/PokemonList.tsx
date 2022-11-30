import { AppPokemonListQuery } from "queries/__generated__/AppPokemonListQuery.graphql";
import React from "react";
import {
  graphql,
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";

export const PokemonList: React.FC<{
  initialQueryRef: PreloadedQuery<AppPokemonListQuery>;
}> = ({ initialQueryRef }) => {
  const data = usePreloadedQuery(
    graphql`
      query PokemonListNameQuery($first: Int!) {
        pokemons(first: $first) {
          name
        }
      }
    `,
    initialQueryRef
  );

  console.log(data);

  return <div>PokemonList</div>;
};
