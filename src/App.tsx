import { Suspense } from "react";
import { graphql, GraphQLTaggedNode, loadQuery } from "react-relay";
import { PokemonList } from "./components/PokemonList";
import RelayEnvironment from "./RelayEnvironment";

const PokemonListQuery: GraphQLTaggedNode = graphql`
  query AppPokemonListQuery {
    pokemons(first: 10) {
      name,
      number
    }
  }
`;

function App() {
  const preloadedQuery = loadQuery(RelayEnvironment, PokemonListQuery, {
    // variables
    // first: 10,
  });

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <PokemonList
          PokemonListQuery={PokemonListQuery}
          preloadedQuery={preloadedQuery}
        />
      </Suspense>
    </div>
  );
}

export default App;
