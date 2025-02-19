/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<db9cd2c9dde9dca0e6f301426860bb8d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { DataID } from "relay-runtime";
import type { RelayReaderExecResolversTestUser____relay_model_instance$data } from "./RelayReaderExecResolversTestUser____relay_model_instance.graphql";
import {RelayReaderExecResolversTest_user_one as queryRelayReaderExecResolversTestUserOneResolverType} from "../RelayReader-ExecResolvers-test.js";
import type { TestResolverContextType } from "../../../mutations/__tests__/TestResolverContextType";
// Type assertion validating that `queryRelayReaderExecResolversTestUserOneResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryRelayReaderExecResolversTestUserOneResolverType: (
  args: void,
  context: TestResolverContextType,
) => ?{|
  +id: DataID,
|});
import {best_friend as relayReaderExecResolversTestUserBestFriendResolverType} from "../RelayReader-ExecResolvers-test.js";
// Type assertion validating that `relayReaderExecResolversTestUserBestFriendResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(relayReaderExecResolversTestUserBestFriendResolverType: (
  __relay_model_instance: RelayReaderExecResolversTestUser____relay_model_instance$data['__relay_model_instance'],
  args: void,
  context: TestResolverContextType,
) => ?{|
  +id: DataID,
|});
import {name as relayReaderExecResolversTestUserNameResolverType} from "../RelayReader-ExecResolvers-test.js";
// Type assertion validating that `relayReaderExecResolversTestUserNameResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(relayReaderExecResolversTestUserNameResolverType: (
  __relay_model_instance: RelayReaderExecResolversTestUser____relay_model_instance$data['__relay_model_instance'],
  args: void,
  context: TestResolverContextType,
) => ?string);
export type DataCheckerTestExecQuery$variables = {||};
export type DataCheckerTestExecQuery$data = {|
  +RelayReaderExecResolversTest_user_one: ?{|
    +best_friend: ?{|
      +best_friend: ?{|
        +name: ?string,
      |},
      +name: ?string,
    |},
    +name: ?string,
  |},
|};
export type DataCheckerTestExecQuery = {|
  response: DataCheckerTestExecQuery$data,
  variables: DataCheckerTestExecQuery$variables,
|};
*/

var node/*: ClientRequest*/ = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "RelayReaderExecResolversTestUser__id"
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "RelayReaderExecResolversTestUser____relay_model_instance"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "name": "__relay_model_instance",
      "args": null,
      "fragment": {
        "kind": "InlineFragment",
        "selections": [
          (v2/*: any*/)
        ],
        "type": "RelayReaderExecResolversTestUser",
        "abstractKey": null
      },
      "kind": "RelayResolver",
      "storageKey": null,
      "isOutputType": false,
      "resolverInfo": {
        "resolverFunction": require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser,
        "rootFragment": null
      }
    }
  ],
  "type": "RelayReaderExecResolversTestUser",
  "abstractKey": null
},
v4 = {
  "name": "name",
  "args": null,
  "fragment": (v3/*: any*/),
  "kind": "RelayResolver",
  "storageKey": null,
  "isOutputType": true,
  "resolverInfo": {
    "resolverFunction": require('./../RelayReader-ExecResolvers-test').name,
    "rootFragment": null
  }
},
v5 = {
  "RelayReaderExecResolversTestUser": {
    "resolverModule": require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser
  }
},
v6 = {
  "name": "best_friend",
  "args": null,
  "fragment": (v3/*: any*/),
  "kind": "RelayResolver",
  "storageKey": null,
  "isOutputType": false,
  "resolverInfo": {
    "resolverFunction": require('./../RelayReader-ExecResolvers-test').best_friend,
    "rootFragment": null
  }
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "DataCheckerTestExecQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "RelayReaderExecResolversTestUser",
        "modelResolvers": {
          "RelayReaderExecResolversTestUser": {
            "alias": null,
            "args": null,
            "fragment": (v0/*: any*/),
            "kind": "RelayResolver",
            "name": "RelayReaderExecResolversTest_user_one",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser__id.graphql'), require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser, 'id', true),
            "path": "RelayReaderExecResolversTest_user_one.__relay_model_instance"
          }
        },
        "backingField": {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "name": "RelayReaderExecResolversTest_user_one",
          "resolverModule": require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTest_user_one,
          "path": "RelayReaderExecResolversTest_user_one"
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "RelayReaderExecResolversTestUser",
          "kind": "LinkedField",
          "name": "RelayReaderExecResolversTest_user_one",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "fragment": (v1/*: any*/),
              "kind": "RelayResolver",
              "name": "name",
              "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser____relay_model_instance.graphql'), require('./../RelayReader-ExecResolvers-test').name, '__relay_model_instance', true),
              "path": "RelayReaderExecResolversTest_user_one.name"
            },
            {
              "kind": "ClientEdgeToClientObject",
              "concreteType": "RelayReaderExecResolversTestUser",
              "modelResolvers": {
                "RelayReaderExecResolversTestUser": {
                  "alias": null,
                  "args": null,
                  "fragment": (v0/*: any*/),
                  "kind": "RelayResolver",
                  "name": "best_friend",
                  "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser__id.graphql'), require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser, 'id', true),
                  "path": "RelayReaderExecResolversTest_user_one.best_friend.__relay_model_instance"
                }
              },
              "backingField": {
                "alias": null,
                "args": null,
                "fragment": (v1/*: any*/),
                "kind": "RelayResolver",
                "name": "best_friend",
                "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser____relay_model_instance.graphql'), require('./../RelayReader-ExecResolvers-test').best_friend, '__relay_model_instance', true),
                "path": "RelayReaderExecResolversTest_user_one.best_friend"
              },
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "RelayReaderExecResolversTestUser",
                "kind": "LinkedField",
                "name": "best_friend",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "fragment": (v1/*: any*/),
                    "kind": "RelayResolver",
                    "name": "name",
                    "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser____relay_model_instance.graphql'), require('./../RelayReader-ExecResolvers-test').name, '__relay_model_instance', true),
                    "path": "RelayReaderExecResolversTest_user_one.best_friend.name"
                  },
                  {
                    "kind": "ClientEdgeToClientObject",
                    "concreteType": "RelayReaderExecResolversTestUser",
                    "modelResolvers": {
                      "RelayReaderExecResolversTestUser": {
                        "alias": null,
                        "args": null,
                        "fragment": (v0/*: any*/),
                        "kind": "RelayResolver",
                        "name": "best_friend",
                        "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser__id.graphql'), require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser, 'id', true),
                        "path": "RelayReaderExecResolversTest_user_one.best_friend.best_friend.__relay_model_instance"
                      }
                    },
                    "backingField": {
                      "alias": null,
                      "args": null,
                      "fragment": (v1/*: any*/),
                      "kind": "RelayResolver",
                      "name": "best_friend",
                      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser____relay_model_instance.graphql'), require('./../RelayReader-ExecResolvers-test').best_friend, '__relay_model_instance', true),
                      "path": "RelayReaderExecResolversTest_user_one.best_friend.best_friend"
                    },
                    "linkedField": {
                      "alias": null,
                      "args": null,
                      "concreteType": "RelayReaderExecResolversTestUser",
                      "kind": "LinkedField",
                      "name": "best_friend",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "fragment": (v1/*: any*/),
                          "kind": "RelayResolver",
                          "name": "name",
                          "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./RelayReaderExecResolversTestUser____relay_model_instance.graphql'), require('./../RelayReader-ExecResolvers-test').name, '__relay_model_instance', true),
                          "path": "RelayReaderExecResolversTest_user_one.best_friend.best_friend.name"
                        }
                      ],
                      "storageKey": null
                    }
                  }
                ],
                "storageKey": null
              }
            }
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataCheckerTestExecQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "modelResolvers": {
          "RelayReaderExecResolversTestUser": {
            "resolverModule": require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTestUser
          }
        },
        "backingField": {
          "name": "RelayReaderExecResolversTest_user_one",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false,
          "resolverInfo": {
            "resolverFunction": require('./../RelayReader-ExecResolvers-test').RelayReaderExecResolversTest_user_one,
            "rootFragment": null
          }
        },
        "linkedField": {
          "alias": null,
          "args": null,
          "concreteType": "RelayReaderExecResolversTestUser",
          "kind": "LinkedField",
          "name": "RelayReaderExecResolversTest_user_one",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "kind": "ClientEdgeToClientObject",
              "modelResolvers": (v5/*: any*/),
              "backingField": (v6/*: any*/),
              "linkedField": {
                "alias": null,
                "args": null,
                "concreteType": "RelayReaderExecResolversTestUser",
                "kind": "LinkedField",
                "name": "best_friend",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "ClientEdgeToClientObject",
                    "modelResolvers": (v5/*: any*/),
                    "backingField": (v6/*: any*/),
                    "linkedField": {
                      "alias": null,
                      "args": null,
                      "concreteType": "RelayReaderExecResolversTestUser",
                      "kind": "LinkedField",
                      "name": "best_friend",
                      "plural": false,
                      "selections": [
                        (v4/*: any*/),
                        (v2/*: any*/)
                      ],
                      "storageKey": null
                    }
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            },
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      }
    ],
    "use_exec_time_resolvers": true
  },
  "params": {
    "cacheID": "a997fdfcc0dc79ab47ceea5ffbd6c1cc",
    "id": null,
    "metadata": {},
    "name": "DataCheckerTestExecQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "c26914a95b9bc6165ea7513805119b77";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  DataCheckerTestExecQuery$variables,
  DataCheckerTestExecQuery$data,
>*/);
