import Grid from "@mui/material/Grid";
import MappedItem from "../components/items/MappedItem";

const Other = () => {
  return (
    <div>
      <h1 className="subtitle">雑貨</h1>
      <p className="align-left">
      １つ持っていればバッグをお出かけ先で床に置いたり膝の上に乗せたりする必要がなくなりますよ！

デザインも豊富なため、お友達へのプレゼントにも最適です！
      </p>
      <p className="warning align-left">
        ※写真と実物と色味が異なる場合がございますので、予めご了承ください
      </p>
      <hr />

      <Grid container spacing={2} alignItems="center">
        {[...Array(10)].map((e, i) => 
          <MappedItem key={i} bgColor="pink" />
        )}
      </Grid>
    </div>
  )
};

export default Other;


