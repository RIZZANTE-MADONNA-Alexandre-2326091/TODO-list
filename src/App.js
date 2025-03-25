import './App.css';
import Header from "./Header";
import Liste from "./Liste";
import Footer from "./Footer";
import {useState} from "react";
import AjoutTache from "./AjoutTache.js";
import todo from "./todo.json";

function setCurrentTodo(newTodo) {
    {todo = newTodo;}
}

const App = () => {
    if (!window.confirm("Voulez vous charger les tâches déjà présentes?")) {
        todo.taches = [];
    }
    const [currentTodo, setCurrentTodo] = useState(todo);
    console.log(todo);

    const taches = currentTodo.taches || [];
    return (
        <div className="App">
            <Header taches={taches} />
            <Liste taches={taches} />
            <button onClick={AjoutTache(currentTodo)}>Ajout Test</button>
            <Footer/>
        </div>
  );
}

export {setCurrentTodo};
export default App;
