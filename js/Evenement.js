
class Evenement {
  constructor(titre, type, description, jour, heureDebut, duree) {
    this.titre = titre;
    this.type = type;               // "Danse" ou "Musique"
    this.description = description;
    this.jour = jour;               // "vendredi", "samedi", "dimanche"
    this.heureDebut = heureDebut;   // "18:00"
    this.duree = duree;             // en minutes
  }
  /*

  heureFin() {
    const [h, m] = this.heureDebut.split(":").map(Number);
    const total = h * 60 + m + this.duree;
    const hh = String(Math.floor(total / 60) % 24).padStart(2, "0");
    const mm = String(total % 60).padStart(2, "0");
    return `${hh}:${mm}`;
  }
*/
  carte() {
    return `
      <li class="carte" data-jour="${this.jour}" data-type="${this.type}">
        <p class="jour">${this.jour}</p>
        <h3>${this.titre}</h3>
        <p class="type">${this.type}</p>
        <p class="description">${this.description}</p>
      </li>`;
  }
}

