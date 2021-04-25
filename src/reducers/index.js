import { combineReducers } from "redux";
import related1 from "../assets/images/related/related1.jpg";
import related2 from "../assets/images/related/related2.jpg";
import related3 from "../assets/images/related/related3.jpg";
import related4 from "../assets/images/related/related4.jpg";
import details1 from "../assets/images/details/detail1.jpg";
import details2 from "../assets/images/details/detail2.jpg";
import details3 from "../assets/images/details/detail3.jpg";
import details4 from "../assets/images/details/detail4.jpg";

const relatedAnnouncesReducer = () => {
  return [
    {
      id: 1,
      title: "Chambre Simple",
      city: "Mohammedia",
      date: "20 Avril 2021",
      stars: 3,
      price: 800,
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
      gender: "Masculin",
      roommates_number: 3,
      roommate_min_age: 18,
      roommate_max_age: 23,
      status: "Etudiant",
      images: [related1, details2, details3, details4],
      first_name: "Oussama",
      last_name: "BASRY",
      email: "obasry@gmail.com",
      phone: "+212 6 50 56 38 27",
    },
    {
      id: 2,
      title: "Appartement",
      city: "Mohammedia",
      date: "20 Mars 2021",
      stars: 5,
      price: 1500,
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
      gender: "Masculin",
      roommates_number: 3,
      roommate_min_age: 23,
      roommate_max_age: 25,
      status: "Etudiant",
      images: [related2, related3, details3, details4],
      first_name: "Bilal",
      last_name: "BASRY",
      email: "obasry@gmail.com",
      phone: "+212 6 50 56 38 27",
    },
    {
      id: 1,
      title: "Villa",
      city: "Casablanaca",
      date: "30 Avril 2021",
      stars: 2,
      price: 2000,
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
      gender: "Masculin",
      roommates_number: 3,
      roommate_min_age: 21,
      roommate_max_age: 22,
      status: "Etudiant",
      images: [related3, details2, details3, details4],
      first_name: "Moaad",
      last_name: "lmsellk",
      email: "moaad@gmail.com",
      phone: "+212 6 50 56 38 27",
    },
    {
      id: 1,
      title: "Chambre Suite",
      city: "Rabat",
      date: "20 Fevier 2021",
      stars: 4,
      price: 700,
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
      gender: "Feminin",
      roommates_number: 2,
      roommate_min_age: 18,
      roommate_max_age: 21,
      status: "Etudiant",
      images: [related4, details2, details3, details4],
      first_name: "Hassna",
      last_name: "MARWA",
      email: "hassna@gmail.com",
      phone: "+212 6 50 56 38 27",
    },
  ];
};

const selectedAnnounceReducer = (
  selectedAnnounce = relatedAnnouncesReducer()[0],
  action
) => {
  if (action.type === "ANNOUNCE_SELECTED") {
    return action.payload;
  }
  return selectedAnnounce;
};

export default combineReducers({
  relatedAnnounces: relatedAnnouncesReducer,
  selectedAnnounce: selectedAnnounceReducer,
});
