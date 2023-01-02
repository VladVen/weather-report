import React, { FC, useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { CityPaper } from "../CityPaper/CityPaper";
import useDebounce from "../../hooks/useDebounce";
import { cityAPI } from "../../services/CityService";
import styles from "./searchCity.module.css";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchCity {
  onSave: (id: string) => void;
}

export const SearchCity: FC<ISearchCity> = ({ onSave }) => {
  const [cities, setCities] = useState<string>("");
  const debouncedCities = useDebounce(cities, 500);

  const { currentData, isFetching, refetch, error } = cityAPI.useFetchCityQuery(
    debouncedCities,
    { skip: debouncedCities === "" }
  );
  return (
    <div className={styles.container}>
      <div>
        <TextField
          value={cities}
          onChange={(event) => setCities(event.target.value)}
        />
        <Button
          onClick={() => refetch()}
          disabled={!cities}
          variant={"contained"}
        >
          Search
        </Button>
        <Button
          onClick={() => setCities("")}
          disabled={!cities}
          variant={"contained"}
        >
          <ClearIcon />
        </Button>
      </div>
      <div>
        {isFetching && <CircularProgress />}
        {/*@ts-ignore*/}
        {error && <div className={styles.error}>{error.data.message}</div>}
        {currentData && (
          <div>
            <CityPaper id={currentData.id.toString()} onSave={onSave} />
          </div>
        )}
      </div>
    </div>
  );
};
