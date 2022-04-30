import { useState, useEffect } from "react";
import { app } from "../plugins/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Item } from "../types/Type";
import { StyledCard } from "../styles/component";
import { StyledButton } from "../styles/component";

const Demo = () => {
  const [items, setItems] = useState([]);

  const db = getFirestore(app);
  const getItems = async (db) => {
    // get collection
    const itemsCol = collection(db, 'items');
    // get docs
    const itemSnapshot = await getDocs(itemsCol);
    // get items and create earring list
    let earrings: Item[] = [];
    itemSnapshot.docs.map(doc => {
      if (doc.data().genre === 'other') {
        earrings.push(doc.data());
      }
    });
    setItems(earrings);
  }

  useEffect(() => {
    getItems(db);
  })

  return (
    <div>
      <h1>Demo</h1>

      <Grid container>
        {items.map(item => {
          return (
            <Grid item md={6}>
              <StyledCard variant="elevation">
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imgPath}
                  alt={item.itemName}
                />
                <CardContent>
                  <h2>{item.itemName}</h2>
                  <div className="text-left">
                    <p>価格: ￥{item.price}</p>
                    <p>在庫数: {item.counts}</p>
                    <p>お届け日数: 5 - 8日</p>
                    <p>※日本国内送料無料</p>
                  </div>
                  <StyledButton variant="contained">カートに追加</StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default Demo;
