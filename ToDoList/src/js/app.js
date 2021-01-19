// Variables
let spanJour = document.getElementById('spanJour');
// Ecouteurs

// Functions
function JourDeLaSemaine() {
    const jour = new Date()
    let day = jour.getDay();
    switch (day) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break

        case 2: day = "Mardi";
            break

        case 3: day = "Mercredi";
            break

        case 4: day = "Jeudi";
            break

        case 5: day = "Vendredi";
            break

        case 6: day = "Samedi";
            break
        default:
            "nothing";
            break;
    }
spanJour.innerText =day;
}

JourDeLaSemaine()