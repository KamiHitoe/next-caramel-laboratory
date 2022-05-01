import Grid from "@mui/material/Grid";
import MappedItem from "@/components/items/MappedItem";

const Earring = () => {
  return (
    <div>
      <h1 className="subtitle">ピアス＊イヤリング</h1>
      <p className="align-left">
      一部商品を除いて、ピアスからイヤリングへの変更、イヤリングからピアスへの変更が可能です。
変更したい商品がある場合は、お問い合わせフォームよりご相談ください
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

export default Earring;


