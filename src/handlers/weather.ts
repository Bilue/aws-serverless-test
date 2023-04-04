import { returnResponse } from "./return";
import { getWeather } from '../services/weather';

export const myhandler = async (event, context) => {
  console.debug(event, context);

  const { queryStringParameters: { zipCode, countryCode } } = event;


  const response = await getWeather({ zipCode, countryCode });

  return returnResponse(response);
}

export const handler = myhandler;