const Liste = ({taches = []}) => {
    return (
        <div>
            <h2>Liste des tâches</h2>
            {taches && taches.map(t => {return (<li className="listElement">Id: {t.id}, Intitulé: {t.title}, Description: {t.description}
            , Terminé: {t.done ? "vrai": "faux"}, Urgent: {t.urgent ? "vrai": "faux"}, Date dé création: {t.date_creation}, Date d'échéance: {t.date_echeance}</li>)})}
        </div>
    )
}

export default Liste;
