import { APIGatewayProxyResult } from 'aws-lambda'
export const returnResponse = (responseObject: any): APIGatewayProxyResult => {
    return {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: responseObject,
    };
};

export const returnError = (responseObject: any): APIGatewayProxyResult => {
  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: responseObject,
  };
};
