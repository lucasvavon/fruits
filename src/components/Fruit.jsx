export default function Fruit({ fruitInfo, onClick }) {
    // state

    // comportement


    //render
    return <li key={fruitInfo.id}>
        {fruitInfo.name} <button onClick={onClick}>X</button>
    </li>
}