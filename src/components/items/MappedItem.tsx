import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MappedItem = (props) => {
  return (
    <Grid item md={6}>
      <Box sx={{ 
        width: 100,
        height: 100,
        backgroundColor: props.bgColor,
      }}>
        <p>item</p>
      </Box>
    </Grid>
  )
};

export default MappedItem;
