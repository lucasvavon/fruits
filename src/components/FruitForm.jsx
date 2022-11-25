import { useState } from "react";

export default function FruitForm({handleAdd}) {
    // state
    const [newFruit, setNewFruit] = useState("");

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputRef.current.value);
          
        const id = new Date().getTime();
        const fruitToAdd = {id: id, name: newFruit};
        //copyfruit.push({id: id, name: newFruit});
        handleAdd(fruitToAdd)
        setNewFruit("");
         
      }

      const handleChange = (event) => {
        setNewFruit(event.target.value);
      }

    //render
    return <form action={"submit"} onSubmit={handleSubmit}>
    <input
        value={newFruit}
        type="text"
        placeholder="Add fruit..."
        onChange={handleChange}
    /><button> + </button>
    </form>
}