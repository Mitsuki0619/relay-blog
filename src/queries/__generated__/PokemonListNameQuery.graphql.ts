/**
 * @generated SignedSource<<858ce23c58555cbebf193136ad05460b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonListNameQuery$variables = {
  first: number;
};
export type PokemonListNameQuery$data = {
  readonly pokemons: ReadonlyArray<{
    readonly name: string;
  }>;
};
export type PokemonListNameQuery = {
  response: PokemonListNameQuery$data;
  variables: PokemonListNameQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonListNameQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonListNameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "af17d93e05ae00b3f4b5ae69a72f35e5",
    "id": null,
    "metadata": {},
    "name": "PokemonListNameQuery",
    "operationKind": "query",
    "text": "query PokemonListNameQuery(\n  $first: Int!\n) {\n  pokemons(first: $first) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "638bb7b871f0bc9e6b66032253916605";

export default node;
