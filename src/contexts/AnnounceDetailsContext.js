import React, { useState, createContext } from "react";

export const AnnounceDetailsContext = createContext();

export const AnnounceDetailsProvider = (props) => {
  const [announceDetails, setAnnounceDetails] = useState({
    id: "1",
    title: "Chambre Double",
    city: "Mohammedia",
    date: "20 Avril 2021",
    stars: 3,
    price: 1000,
    description:
      "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes, elles offrent une sensation de confort intemporel créée pour des moments spéciaux et un séjourpaisible. Les chambres ont entre 20 et 25 m2 et donnent sur laville d'Estoril. Lits simples ou lit double, queen ou king size,salle de bains en marbre, dont certaines avec baignoire et douche séparées.",
    gender: "Masculin",
    roommates_number: 4,
    roommate_min_age: 20,
    roommate_max_age: 25,
    status: "Etudiant",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwyfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwzfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MnwxODg2ODV8MXwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxODg2ODV8MHwxfHNlYXJjaHw0fHxiZWRyb29tfGVufDB8fHx8MTYxODcwNzE4Mw&ixlib=rb-1.2.1&q=85",
    ],
    first_name: "Oussama",
    last_name: "BASRY",
    email: "obasry@gmail.com",
    phone: "+212 6 50 56 38 27",
  });

  return (
    <AnnounceDetailsContext.Provider
      value={[announceDetails, setAnnounceDetails]}
    >
      {props.children}
    </AnnounceDetailsContext.Provider>
  );
};
