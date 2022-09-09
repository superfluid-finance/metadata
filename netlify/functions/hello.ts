import { Handler } from "@netlify/functions";
import metadata from "../..";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(metadata.networks),
  };
};

export { handler };
