import React from "react";
import List from './components/List/List'
import Form from './components/Form/Form'

function App() {
    const [wishes, setWishes] = React.useState([])
    const remove = (value) => {
        const newList = [...wishes];
        console.log("newListBefore",newList)
        const newState = newList.filter((wish) => wish != value)
        setWishes(newState)
        console.log(wishes)

    }
    const addWish = (value) =>{
        setWishes([...wishes, value])
    }
    console.log(wishes)
    return (
        <div className="container">
        <List wishes={wishes} onClick={remove}/>
        <Form onSubmit={addWish}/>
        </div>
    )
}

export default App