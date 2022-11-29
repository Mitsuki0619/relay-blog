/**
 * @generated SignedSource<<80aa8fa5d09949d6ddcf1d8af1edbd7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppPokemonListQuery$variables = {};
export type AppPokemonListQuery$data = {
  readonly pokemons: ReadonlyArray<{
    readonly name: string;
    readonly number: string;
  }>;
};
export type AppPokemonListQuery = {
  response: AppPokemonListQuery$data;
  variables: AppPokemonListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 10
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      }
    ],
    "storageKey": "pokemons(first:10)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPokemonListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e32d0b542cbacef50e203a2fcb4de197",
    "id": null,
    "metadata": {},
    "name": "AppPokemonListQuery",
    "operationKind": "query",
    "text": "query AppPokemonListQuery {\n  pokemons(first: 10) {\n    name\n    number\n  }\n}\n"
  }
};
})();

(node as any).hash = "941e18c68952c1c39dfaacddff86d56d";

export default node;
