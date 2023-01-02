import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { cityAPI } from "../../services/CityService";
import { IList } from "../../models/DetailedWeather.model";
import { DaysGroup } from "../../components/DaysGroup/DaysGroup";
import { TemperatureList } from "../../components/TemperatureList/TemperatureList";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CommonTabInfo } from "../../components/CommonTabInfo/CommonTabInfo";
import { RefreshOutlined } from "@mui/icons-material";
import styles from "./city.module.css";
import { Preloader } from "../../components/Preloader/Preloader";

const City = () => {
  const [selected, setSelected] = useState<string>("");

  const params = useParams();
  const navigate = useNavigate();

  const { data, refetch, isError, isFetching } =
    cityAPI.useFetchDetailedForecastQuery(params.id as string);

  if (!params.id || isError) {
    navigate("/error");
  }
  if (!data || isFetching) return <Preloader />;

  const tabs: ITabs = {};

  for (const item of data.list) {
    if (!tabs[`${new Date(item.dt * 1000).toDateString()}`]) {
      tabs[`${new Date(item.dt * 1000).toDateString()}`] = [];
      tabs[`${new Date(item.dt * 1000).toDateString()}`].push(item);
    } else {
      tabs[`${new Date(item.dt * 1000).toDateString()}`].push(item);
    }
  }

  const goBack = () => {
    navigate("/");
  };

  if (!selected) {
    setSelected(Object.keys(tabs)[0]);
  }

  return (
    <div>
      <div className={styles.container}>
        <ArrowBackIosIcon color={"primary"} onClick={goBack} />
        <DaysGroup
          tabs={Object.keys(tabs)}
          selected={selected}
          onSelect={setSelected}
        />
        <RefreshOutlined color={"primary"} onClick={refetch} />
      </div>
      <CommonTabInfo
        data={data.city}
        list={tabs[selected ? selected : Object.keys(tabs)[0]]}
      />
      <TemperatureList tab={tabs[selected ? selected : Object.keys(tabs)[0]]} />
    </div>
  );
};

export interface ITabs {
  [key: string]: IList[];
}

export default City;
