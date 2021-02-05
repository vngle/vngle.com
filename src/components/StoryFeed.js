import React, { useEffect } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

const StoryFeed = () => {
  useEffect(async () => {
    const assets = await API.graphql(graphqlOperation(queries.listVodAssets));
    let { nextToken } = assets.data.listVodAssets;
    if (nextToken === undefined) {
      nextToken = "";
    }
    console.log(assets);
  });

  return <div>Storyfeed</div>;
};

export default StoryFeed;
