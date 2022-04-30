import { useState, useEffect } from "react";
import { app } from "../plugins/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Grid from "@mui/material/Grid";
import { StyledCard } from "../styles/component";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Item } from "../types/Type";

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
    const items = itemSnapshot.docs.map(doc => {
      if (doc.data().genre === 'other') {
        earrings.push(doc.data());
      }
      doc.data()
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
              <StyledCard variant="elevated">
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imgPath}
                  alt={item.itemName}
                />
                <CardContent>
                  <p>name: {item.itemName}</p>
                  <p>price: {item.price}</p>
                  <p>counts: {item.counts}</p>
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
