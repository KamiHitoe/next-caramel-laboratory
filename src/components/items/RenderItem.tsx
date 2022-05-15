import { useState, useEffect } from "react";
import { firebase } from "@/plugins/firebase";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite';
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Item } from "@/types/Type";
import { StyledCard } from "@/styles/component";
import { StyledAmberButton } from "@/styles/component";

const RenderItem = (props) => {
  const [items, setItems] = useState([]);

  const db = getFirestore(firebase);
  const q = query(collection(db, "items"), where("genre", "==", props.genre));
  const getItems = async (q) => {
    // get collection
    // const itemsCol = collection(db, 'items');
    // get docs
    const itemQuerySnapshot = await getDocs(q);
    // get docs.data() => items[]
    const items: Item[] = [];
    itemQuerySnapshot.forEach(doc => {
      items.push(doc.data());
    });
    setItems(items);
    // return items;
  };

  useEffect(() => {
    getItems(q);
  }, []); // no dependency

  return (
    <div>
      {/* custom description about page */}

      <Grid container>
        {items.map((item, i) => {
          return (
            <Grid item md={6} key={i}>
              <StyledCard variant="elevation">
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imgPath}
                  alt={item.itemName}
                />
                <CardContent>
                  <h2 className="text-left">{item.itemName}</h2>
                  <div className="text-left">
                    <p>価格: ￥{item.price}</p>
                    <p>在庫数: {item.counts}</p>
                    <p>お届け日数: 5 - 8日</p>
                    <p>※日本国内送料無料</p>
                  </div>
                  <StyledAmberButton variant="contained">カートに追加</StyledAmberButton>
                </CardContent>
              </StyledCard>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default RenderItem;
