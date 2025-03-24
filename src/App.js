import './App.css';
import Header from "./Header";
import Liste from "./Liste";
import Footer from "./Footer";
import {useState} from "react";
import todo from "./todo.json";

const App = () => {
    if (!window.confirm("Voulez vous charger les tâches déjà présentes?")) {
        todo = [];
    }
    const [currentTodo, setCurrentTodo] = useState(todo);
    console.log(todo);


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
            <Liste taches={taches} />
            <button onClick={ajoutTache}>Ajout Test</button>
            <Footer />
        </div>
  );
}

export default App;
