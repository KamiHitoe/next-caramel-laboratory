import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  margin: "2rem",
  // backgroundColor: "#ffecb3",
});

const StyledText = styled("p")({
  padding: "1rem",
  textAlign: "left",
});

const ItemCard = (props) => {
  if (props.side === "left") {
    return (
      <StyledCard variant="outlined">
        <Grid container>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="300"
              image={props.imageSrc}
              alt="sea_glass_bl"
            />
          </Grid>
          <Grid item md={6}>
            <CardContent>
              <h2 className="subtitle">{props.subtitle}</h2>
              <StyledText>{props.text}</StyledText>
            </CardContent>
          </Grid>
  
        </Grid>
      </StyledCard>
    );
  // props.side === "right"
  } else {
    return (
      <StyledCard variant="outlined">
        <Grid container>
          <Grid item md={6}>
            <CardContent>
              <h2 className="subtitle">{props.subtitle}</h2>
              <p>{props.text}</p>
            </CardContent>
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="300"
              image={props.imageSrc}
              alt="sea_glass_bl"
            />
          </Grid>
  
        </Grid>
      </StyledCard>
    );
  }
};

export default ItemCard;
