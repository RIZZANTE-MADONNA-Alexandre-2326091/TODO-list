class Tache {
    constructor(id, intitule, dateCreation, dateEcheance, etat, description, urgent) {
        this.id = id;
        if (intitule.length > 3) {
            this.intitule = intitule;
        }
        else {
            throw new Error("Intitulé trop court");
        }
        this.dateCreation = dateCreation;
        this.dateEcheance = dateEcheance;
        if (etat === 'Nouveau' || etat === 'En cours' || etat === 'Réussi' || etat === 'En attente' || etat === 'Abandonné') {
            this.etat = etat;
        }
        else {
            throw new Error("Etat non valide");
        }
        if (description == null) {
            this.description = "Pas de description";
        }
        else {
            this.description = description;
        }
        this.urgent = urgent;
    }

    get getIntitule() {
        return this.intitule;
    }

    get getDateCreation() {
        return this.dateCreation;
    }
}

export default Tache;