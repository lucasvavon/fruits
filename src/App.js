import React, {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    {id: 1, name:"Apricot"},
    {id: 2, name:"Banana"},
    {id: 3, name:"Pear"},
    {id: 4, name:"Strawberry"},
  ]);

  // comportements
  const handleDelete = (id) => {
    // 1. copie du state
    const fruitsCopy = [...fruits];

    // 2. manip state
    const fcu = fruitsCopy.filter(fruit => fruit.id !== id)

    // 3. Actualiser state
    setFruits(fcu)
  };

  const handleAdd = (fruitToAdd) => {
    const copyfruit = [...fruits];
    
    copyfruit.push(fruitToAdd);

    setFruits(copyfruit);
  };

  const displayBestFruit = (fruitName) => {
    alert(`I love this fruit : ${fruitName} !! `)
  }
  

  // affichage
  return (
      <>
        <h1>List</h1>
        <ul>
          {fruits.map((fruit) => (
            <Fruit 
              fruitInfo={fruit} 
              onClick={() => handleDelete(fruit.id)} 
              key={fruit.id} 
            />
          ))}
        </ul>

        <FruitForm handleAdd={handleAdd} />
    
      </>
  );
}

export default App;