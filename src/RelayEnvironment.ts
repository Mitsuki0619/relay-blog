// your-app-name/src/RelayEnvironment.js
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay: FetchFunction = async (query, variables) => {
  return fetchGraphQL(query, variables);
};

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
