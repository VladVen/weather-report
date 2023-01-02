import React, { FC } from "react";
import { Button, ButtonGroup } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";

interface IDaysGroup {
  tabs: string[];
  onSelect: (item: string) => void;
  selected: string;
}
export const DaysGroup: FC<IDaysGroup> = ({ tabs, onSelect, selected }) => {
  const size = useWindowSize();

  return (
    <div style={{overflowX: "auto" }}>
      <ButtonGroup variant="text">
        {tabs.map((item) => (
          <Button
            key={item}
            onClick={() => onSelect(item)}
            variant={selected === item ? "contained" : "text"}
          >
            {size.width > 500 ? item : item.slice(0, 3)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
