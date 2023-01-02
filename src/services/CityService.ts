import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICity } from "../models/City.model";
import { IDetailedWeather } from "../models/DetailedWeather.model";

export const cityAPI = createApi({
  reducerPath: "cityAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (build) => ({
    fetchCity: build.query<ICity, string>({
      query: (city: string) => ({
        url: `/weather`,
        params: {
          q: city,
          appid: "fbe5fd6c8d968594649138ac8446a3c3",
          units: "metric",
        },
      }),
    }),
    fetchCityById: build.query<ICity, string>({
      query: (id: string) => ({
        url: `/weather`,
        params: {
          id,
          appid: "fbe5fd6c8d968594649138ac8446a3c3",
          units: "metric",
        },
      }),
    }),
    fetchDetailedForecast: build.query<IDetailedWeather, string>({
      query: (id: string) => ({
        url: `/forecast`,
        params: {
          id,
          appid: "fbe5fd6c8d968594649138ac8446a3c3",
          units: "metric",
        },
      }),
    }),
  }),
});
