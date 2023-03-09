export type Coord = {
  lon: number
  lat: number
}

export type WeatherPayload = {
  id: number
  main: string
  description: string
  icon: string
}

export type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type Wind = {
  speed: number
  deg: number
}

export type Clouds = {
  all: number
}

export type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type RawWeatherAPIResponse = {
  coord: Coord,
  weather: WeatherPayload[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export type Weather = {
  lon: number
  lat: number
  main: string
  description: string
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}
