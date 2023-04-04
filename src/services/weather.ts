import { HttpClient } from '../utils/httpClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWeather = async (payload: any): Promise<any> => {
  const { zipCode, countryCode } = payload;

  // Note: Hardcoded for the purpose of the test only
  const baseUrl = process.env.BASE_URL || 'https://api.openweathermap.org';
  const requestUrl = process.env.REQUEST_URL || 'https://api.openweathermap.org/data/2.5/weather';
  const appId = process.env.APP_ID || 'd8720f93a157e458c5f2f35053a288b2';

  const httpClient = new HttpClient(baseUrl);
  
  const url = `${requestUrl}?zip=${zipCode},${countryCode}&appid=${appId}`;
 
  const { data } = await httpClient.get(url);
  const {
    coord: { lon, lat },
    weather: [ { main, description } ],
    main: { temp,feels_like, temp_min, temp_max, pressure, humidity }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any = data;

  const response = {
    lon,
    lat,
    main,
    description,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity
  };

  return response;  
};
