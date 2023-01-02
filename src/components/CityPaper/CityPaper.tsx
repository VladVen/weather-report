import React, { FC, useState } from "react";
import { Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./cityPaper.module.css";
import { cityAPI } from "../../services/CityService";
import { NavLink } from "react-router-dom";

interface ICityPaper {
  onSave: (id: string) => void;
  id: string;
}

export const CityPaper: FC<ICityPaper> = ({ onSave, id }) => {
  const [saved, setSaved] = useState<boolean>(localStorage[id] === id);
  const { data } = cityAPI.useFetchCityByIdQuery(id);

  const saveHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    setSaved((prevState) => !prevState);
    onSave(id);
  };

  if (!data) return null;

  return (
    <NavLink to={`/city/${id}`}>
      <Paper className={styles.paper}>
        <div>
          <div className={styles.iconPart}>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={"Icon"}
              />
            </div>
            <div>{data.main.temp} °C</div>
          </div>
          <div>Feels like: {data.main.feels_like} °C</div>
        </div>
        <div>
          <FavoriteIcon sx={{ color: saved ? "red" : "white" }} onClick={(event) => saveHandler(event)} />
        </div>
        <div className={styles.rightSide}>
          <div>City: {data.name}</div>
          <div>Country: {data.sys.country}</div>
          <div>Weather: {data.weather[0].main}</div>
          <div>{data.weather[0].description}</div>
        </div>
      </Paper>
    </NavLink>
  );
};
