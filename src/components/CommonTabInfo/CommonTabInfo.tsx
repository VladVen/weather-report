import React, { FC } from "react";
import { ICity, IList } from "../../models/DetailedWeather.model";
import { Paper } from "@mui/material";
import styles from "./commonTableInfo.module.css";

interface ICommonTabInfo {
  data: ICity;
  list: IList[];
}

export const CommonTabInfo: FC<ICommonTabInfo> = ({ data, list }) => {
  const maxTemp = Math.round(
    Math.max.apply(
      null,
      list.map((item) => item.main.temp)
    )
  );
  const minTemp = Math.round(
    Math.min.apply(
      null,
      list.map((item) => item.main.temp)
    )
  );
  const maxWind = Math.max.apply(
    null,
    list.map((item) => item.wind.speed)
  );
  const minWind = Math.min.apply(
    null,
    list.map((item) => item.wind.speed)
  );
  return (
    <>
      <Paper className={styles.paper}>
        <div>
          <div>City: {data.name}</div>
          <div>Country: {data.country}</div>
        </div>
        <div>
          <div>Max temperature: {maxTemp} °C</div>
          <div>Min temperature: {minTemp} °C</div>
        </div>
        <div>
          <div>Max wind speed: {maxWind} m/s</div>
          <div>Min wind speed: {minWind} m/s</div>
        </div>
      </Paper>
    </>
  );
};
