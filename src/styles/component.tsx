import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem";

const lightBlue = "#03a9f4";
const amber = "#ffb300";
const amberLight = "#ffca28";
const amberVeryLight = "#ffecb3";


export const StyledCard = styled(Card)({
  margin: "2rem",
});

export const StyledAmberButton = styled(Button)({
  color: "#fff",
  backgroundColor: amberLight,
  "&:hover": {
    backgroundColor: amber,
  }
});

export const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: amberVeryLight,
  }
});

