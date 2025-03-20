import logo from "./logo.svg";

const Header = ({taches = []}) => {
    const nbTache = taches.length;
    const nbTachesEnCours = taches.filter(t => !t.done).length;
    return (
        <header className="enTete">
            <img src={logo} className="App-logo" alt="logo" />
            <p id="title">TODO-list Alexandre Rizzante--Madonna</p>
            <p>{nbTache} taches, dont {nbTachesEnCours} tâches en cours.</p>
        </header>
    );
}

export default Header;
