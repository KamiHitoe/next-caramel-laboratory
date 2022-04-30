import { useState, useEffect } from "react";
import { app } from "../plugins/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Demo = () => {
  const [items, setItems] = useState([]);

  const db = getFirestore(app);
  const getItems = async (db) => {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    const items = itemSnapshot.docs.map(doc => doc.data());
    setItems(items);
  }

  useEffect(() => {
    getItems(db);
  })

  const list = [1,2,3]

  return (
    <div>
      <h1>Demo</h1>
      {items.map(item => <p>{item.itemName}</p>)}
      {list.map(item => <p>{item}</p>)}
    </div>
  )
};

export default Demo;
