import {setCurrentTodo} from "./App.js";

const AjoutTache = (currentTodo) => {
    const todo = {
        id: 123,
        title: "Nouveau TODO",
        done: true
    };
    const newTodo = {...currentTodo};
    newTodo.taches = [...newTodo.taches, todo];
    setCurrentTodo(newTodo);
};

export default AjoutTache;