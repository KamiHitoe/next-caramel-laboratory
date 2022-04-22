import Grid from "@mui/material/Grid";
import MappedItem from "../components/items/MappedItem";

const HairAccessory = () => {
  return (
    <div>
      <h1 className="subtitle">ヘアアクセサリー</h1>
      <p className="align-left">
      小さな貝殻のヘアアクセサリーを身に着けて、可愛らしさをアップさせてみませんか？
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

export default HairAccessory;


