import {HttpClient} from "./index";

export const createHttpClient = () => {
  const baseUrl = process.env.OPEN_WEATHER_API_URL || 'https://api.openweathermap.org/'
  return new HttpClient(baseUrl)
}

export const client = createHttpClient();
