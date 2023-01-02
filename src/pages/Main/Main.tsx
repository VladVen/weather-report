import React, { useState } from "react";
import { Favorites } from "../../components/Favorites/Favorites";
import { SearchCity } from "../../components/SearchCity/SearchCity";
import style from "./main.module.css";

const Main = () => {
  const [saved, setSaved] = useState(Object.keys(localStorage));
  const onSave = (id: string) => {
    if (localStorage[id] === undefined) {
      setSaved((prevState) => [...prevState, id]);
      localStorage.setItem(id, id);
    } else {
      setSaved((prevState) => prevState.filter((item) => item !== id));
      localStorage.removeItem(id);
    }
  };

  return (
    <div className={style.container}>
      <SearchCity onSave={onSave} />
      <Favorites saved={saved} onSave={onSave} />
    </div>
  );
};

export default Main;
