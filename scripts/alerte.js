var inscription = (form) => {
    let prenom = form.prenom.value;
    let nom = form.nom.value;
    let age = form.age.value;
    let sexe = form.sexe.value;
    let ville = form.ville.value;

    alert(prenom + " " + nom + " " + age + " ans "  + sexe + " "  + ville);
}