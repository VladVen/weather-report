import React, { FC } from "react";
import { CityPaper } from "../CityPaper/CityPaper";
import style from "./favorites.module.css";

interface IFavorites {
  saved: string[];
  onSave: (id: string) => void;
}
export const Favorites: FC<IFavorites> = ({ saved, onSave }) => {
  return (
    <div className={style.container}>
      <h1>Saved Cities</h1>
      <div>
        {saved.length ? (
          saved.map((item) => {
            return <CityPaper key={item} onSave={onSave} id={item} />;
          })
        ) : (
          <div>Nothing here yet</div>
        )}
      </div>
    </div>
  );
};
