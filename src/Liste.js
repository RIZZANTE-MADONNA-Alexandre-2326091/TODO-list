const Liste = ({taches = []}) => {
    return (
        <ul>
            {taches && taches.map(t => {return (<li>{t.title}</li>)})}
        </ul>
    )
}

export default Liste;
