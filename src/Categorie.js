class Categorie {
    constructor(id, intitule, couleur, emoji, actif) {
        this.id = id;
        if (intitule.length > 3) {
            this.intitule = intitule;
        }
        else {
            throw new Error("Intitulé trop court");
        }
        this.couleur = couleur;
        this.emoji = emoji;
        this.actif = actif;
    }
}

export default Categorie;