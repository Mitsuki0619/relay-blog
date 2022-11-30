/**
 * @generated SignedSource<<7b0f413e320137e3ce641c4ddfc8e533>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppPokemonListQuery$variables = {
  first: number;
};
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
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
    "name": "AppPokemonListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppPokemonListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5409dfacddb0ca8936164ab3c420ca51",
    "id": null,
    "metadata": {},
    "name": "AppPokemonListQuery",
    "operationKind": "query",
    "text": "query AppPokemonListQuery(\n  $first: Int!\n) {\n  pokemons(first: $first) {\n    name\n    number\n  }\n}\n"
  }
};
})();

(node as any).hash = "158beffcd5a8fe748d4900c3136d8d68";

export default node;
