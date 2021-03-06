import Grid from "@mui/material/Grid";
import { StyledCard } from "@/styles/component";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledText = styled("p")({
  padding: "1rem",
  textAlign: "left",
});

const ItemCard = (props) => {
  if (props.side === "left") {
    return (
      <StyledCard variant="elevation">
        <Grid container>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="300"
              image={props.imageSrc}
              alt={props.subtitle}
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
      <StyledCard variant="elevation">
        <Grid container>
          <Grid item md={6}>
            <CardContent>
              <h2 className="subtitle">{props.subtitle}</h2>
              <StyledText>{props.text}</StyledText>
            </CardContent>
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="300"
              image={props.imageSrc}
              alt={props.subtitle}
            />
          </Grid>
  
        </Grid>
      </StyledCard>
    );
  }
};

export default ItemCard;
