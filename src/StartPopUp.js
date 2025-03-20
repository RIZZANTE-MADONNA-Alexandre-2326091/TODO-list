import todo from './todo.json';
import App from './App';
import logo from "./logo.svg";

const StartPopUp = () => {
    const startAppWithJSON = () => {
        return (<App todo={todo}/>);
    }
    const startAppWithoutJSON = () => {
        return (<App todo={[]}/>);
    }
    return (
        <div id="startPopUp">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo-reverse" alt="logo" />
            <p id="title">TODO-list Alexandre Rizzante--Madonna</p>
            <button onClick={startAppWithJSON}>Charger le fichier JSON</button>
            <button onClick={startAppWithoutJSON}>Démarrer de zéro</button>
        </div>
    );
}

export default StartPopUp;