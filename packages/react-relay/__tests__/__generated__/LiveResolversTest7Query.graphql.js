/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<2fd2d8a2b2295d30b7705bc1fc03fa54>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import userUserProfilePictureUriSuspendsWhenTheCounterIsOddResolver from "../../../relay-test-utils-internal/resolvers/UserProfilePictureUriSuspendsWhenTheCounterIsOdd.js";
export type LiveResolversTest7Query$variables = {|
  id: string,
  scale: number,
|};
export type LiveResolversTest7Query$data = {|
  +node: ?{|
    +name?: ?string,
    +user_profile_picture_uri_suspends_when_the_counter_is_odd?: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriSuspendsWhenTheCounterIsOddResolver>["read"]>,
  |},
|};
export type LiveResolversTest7Query = {|
  response: LiveResolversTest7Query$data,
  variables: LiveResolversTest7Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scale"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "scale",
    "variableName": "scale"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTest7Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "fragment": {
                  "args": (v3/*: any*/),
                  "kind": "FragmentSpread",
                  "name": "UserProfilePictureUriSuspendsWhenTheCounterIsOdd"
                },
                "kind": "RelayLiveResolver",
                "name": "user_profile_picture_uri_suspends_when_the_counter_is_odd",
                "resolverModule": require('./../../../relay-test-utils-internal/resolvers/UserProfilePictureUriSuspendsWhenTheCounterIsOdd.js'),
                "path": "node.user_profile_picture_uri_suspends_when_the_counter_is_odd"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LiveResolversTest7Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profile_picture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "uri",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96a63eed3a6f0a2ec1bd1109058880c5",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest7Query",
    "operationKind": "query",
    "text": "query LiveResolversTest7Query(\n  $id: ID!\n  $scale: Float!\n) {\n  node(id: $id) {\n    __typename\n    ... on User {\n      name\n      ...UserProfilePictureUriSuspendsWhenTheCounterIsOdd_Z91dU\n    }\n    id\n  }\n}\n\nfragment UserGreetingResolver on User {\n  name\n}\n\nfragment UserProfilePictureResolver_Z91dU on User {\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\nfragment UserProfilePictureUriSuspendsWhenTheCounterIsOdd_Z91dU on User {\n  ...UserGreetingResolver\n  ...UserProfilePictureResolver_Z91dU\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "af618391acb67fdfcab167dd1ebe06ae";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTest7Query$variables,
  LiveResolversTest7Query$data,
>*/);
