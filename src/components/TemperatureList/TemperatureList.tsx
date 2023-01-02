import React, { FC } from "react";
import style from "./Temperature.module.css";
import { IList } from "../../models/DetailedWeather.model";

interface ITemperatureList {
  tab: IList[];
}

export const TemperatureList: FC<ITemperatureList> = ({ tab }) => {
  return (
    <div>
      <h1>Forecast</h1>
      <div className={style.container}>
        {tab.map((item, index, array) => {
          const temp = Math.round(item.main.temp);
          const maxTemp = Math.round(
            Math.max.apply(
              null,
              array.map((item) => item.main.temp)
            )
          );
          return (
            <div
              style={{
                margin: `${(maxTemp - temp) * 10}px 7px 0`,
              }}
              className={style.temp}
            >
              <div>
                {new Date(item.dt * 1000).getUTCHours()}:00 -{" "}
                {new Date(item.dt * 1000).getUTCHours() + 3}:00
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={"icon"}
                />
              </div>
              <div>{item.weather[0].description}</div>
              <div>{temp}°C</div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
