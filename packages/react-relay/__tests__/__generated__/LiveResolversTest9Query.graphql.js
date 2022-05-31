/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<00ff724f15733b2efe472cf6ffca5e9e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import userUserProfilePictureUriSuspendsWhenTheCounterIsOddResolver from "../../../relay-test-utils-internal/resolvers/UserProfilePictureUriSuspendsWhenTheCounterIsOdd.js";
export type LiveResolversTest9Query$variables = {|
  id: string,
  scale: number,
|};
export type LiveResolversTest9Query$data = {|
  +node: ?{|
    +profile_picture_uri?: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriSuspendsWhenTheCounterIsOddResolver>["read"]>,
  |},
|};
export type LiveResolversTest9Query = {|
  response: LiveResolversTest9Query$data,
  variables: LiveResolversTest9Query$variables,
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
v2 = [
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
    "name": "LiveResolversTest9Query",
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
              {
                "alias": "profile_picture_uri",
                "args": null,
                "fragment": {
                  "args": (v2/*: any*/),
                  "kind": "FragmentSpread",
                  "name": "UserProfilePictureUriSuspendsWhenTheCounterIsOdd"
                },
                "kind": "RelayLiveResolver",
                "name": "user_profile_picture_uri_suspends_when_the_counter_is_odd",
                "resolverModule": require('./../../../relay-test-utils-internal/resolvers/UserProfilePictureUriSuspendsWhenTheCounterIsOdd.js'),
                "path": "node.profile_picture_uri"
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
    "name": "LiveResolversTest9Query",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
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
    "cacheID": "f45c1eb48f8355064992566c765cf359",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest9Query",
    "operationKind": "query",
    "text": "query LiveResolversTest9Query(\n  $id: ID!\n  $scale: Float!\n) {\n  node(id: $id) {\n    __typename\n    ... on User {\n      ...UserProfilePictureUriSuspendsWhenTheCounterIsOdd_Z91dU\n    }\n    id\n  }\n}\n\nfragment UserGreetingResolver on User {\n  name\n}\n\nfragment UserProfilePictureResolver_Z91dU on User {\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\nfragment UserProfilePictureUriSuspendsWhenTheCounterIsOdd_Z91dU on User {\n  ...UserGreetingResolver\n  ...UserProfilePictureResolver_Z91dU\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "2bbfd3b99fad5f3c6126bb39970d7e0e";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTest9Query$variables,
  LiveResolversTest9Query$data,
>*/);
