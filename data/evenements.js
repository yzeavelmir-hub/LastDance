// Le contenu : une ligne = un événement
// new Evenement(titre, type, description, jour, heureDebut, duree en minutes)
const programme = [
  new Evenement("Ouverture en danse", "Musique", "L'ouverture en danse qui lance le festival dans la rue.", "vendredi 15 janvier 2027", "16:00", 60),
  new Evenement("Afro Dance", "Danse", "Performance de danse Afro pour dix danseurs et un batteur live.", "vendredi", "20:00", 75),
  new Evenement("Neon Choir", "Musique", "Électro-pop et chœurs sous les lumières violettes.", "vendredi", "21:45", 90),

  new Evenement("Atelier hip-hop", "Danse", "Initiation ouverte à toutes et tous, aucun niveau requis.", "samedi", "14:00", 90),
  new Evenement("Golden Hour", "Musique", "Concert soul et funk pour le coucher de soleil.", "samedi", "18:30", 75),
  new Evenement("Battle Last Dance", "Danse", "Le grand battle : crews contre crews, le public vote.", "samedi", "21:00", 120),

  new Evenement("Bal folk", "Danse", "On apprend les pas et on danse jusqu'à plus soif.", "dimanche", "15:00", 120),
  new Evenement("Duo violon & machines", "Musique", "Musique classique rencontre synthés analogiques.", "dimanche", "18:00", 60),
  new Evenement("Last Dance", "Danse", "Final collectif : artistes et public sur la même scène.", "dimanche", "20:30", 90),
];