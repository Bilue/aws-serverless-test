import { handler } from './handlers/weather';

const event =  {
  headers: {
    Authorization: ``,
    'x-api-key': ``
  },
  requestContext: {
    identity: {},
    authorizer: {},
  },
  isBase64Encoded: false,
  pathParameters: {},
  queryStringParameters: {
    zipCode: '2000',
    countryCode: 'au'
  },
};

const run = async () => {  
  const result = await handler(event, {});
  console.log(result);
}

run();
