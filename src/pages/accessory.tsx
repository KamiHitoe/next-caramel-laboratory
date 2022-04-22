import Grid from "@mui/material/Grid";
import MappedItem from "../components/items/MappedItem";

const Accessory = () => {
  return (
    <div>
      <h1 className="subtitle">桜貝アクセサリー</h1>
      <p className="align-left">
        "幸せを呼ぶ貝"と言われる桜貝を用いたネックレスです。あなたのもとにも幸せが訪れるようにいかかですか★
お友達や恋人へのプレゼントにもピッタリです！
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

export default Accessory;


