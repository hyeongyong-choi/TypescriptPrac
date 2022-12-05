import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import {v4 as getId} from "uuid";


function App() {
  const [items,setItems] = useState<Item[]>([])
  const addItem = (product: string , quantity:number) => {
    console.log("MADE TO THE APP COMPONENT");
    setItems([...items,{id:getId(), product , quantity}])
  }
//   const items = [
//     {id:1, product:"Lemon", quantity:3},
//     {id:2, product:"Chicken Breast", quantity:2},
// ]
  return (
    <div>
      {/* <Greeter person="Colt"></Greeter>
      <Greeter person="Blue"></Greeter>
      <Greeter person="Elton"></Greeter> */}
      <ShoppingList items={items}></ShoppingList>
      <ShoppingListForm onAddItem={addItem}></ShoppingListForm>
    </div>
  );
}

export default App;
