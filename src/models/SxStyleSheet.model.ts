import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export interface SxStyleSheet {
  [key: string]: SxProps<Theme>;
}
