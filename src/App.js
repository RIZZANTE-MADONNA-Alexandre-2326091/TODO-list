import './App.css';
import Header from "./Header";
import Liste from "./Liste";
import Footer from "./Footer";
import {useState} from "react";
import todo from "./todo.json";

const App = () => {
    console.log(todo);

    const [currentTodo, setCurrentTodo] = useState(todo);

    const ajoutTache = () => {
        const todo = {
            id: 123,
            title: "Nouveau TODO",
            done: true
        };
        const newTodo = {...currentTodo};
        newTodo.taches = [...newTodo.taches, todo];
        setCurrentTodo(newTodo);
    }
    const taches = currentTodo.taches || [];
    return (
        <div className="App">
            <Header taches={taches} />
            {JSON.stringify(taches)}
            <Liste taches={taches} />
            <button onClick={ajoutTache}>Ajout Test</button>
            <Footer />
        </div>
  );
}

export default App;
