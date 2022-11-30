import { AppPokemonListQuery } from "queries/__generated__/AppPokemonListQuery.graphql";
import { Suspense } from "react";
import { graphql, GraphQLTaggedNode, loadQuery } from "react-relay";
import { PokemonList } from "./components/PokemonList";
import RelayEnvironment from "./RelayEnvironment";

const PokemonListQuery: GraphQLTaggedNode = graphql`
  query AppPokemonListQuery($first: Int!) {
    pokemons(first: $first) {
      name
      number
    }
  }
`;

function App() {
  const pokemonListQueryRef = loadQuery<AppPokemonListQuery>(
    RelayEnvironment,
    PokemonListQuery,
    {
      // variables
      first: 151,
    }
  );

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <PokemonList
          PokemonListQuery={PokemonListQuery}
          preloadedQuery={pokemonListQueryRef}
        />
      </Suspense>
    </div>
  );
}

export default App;
