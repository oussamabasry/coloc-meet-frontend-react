import React, { useState, createContext } from "react";

export const RelatedAnnouncesContext = createContext();

export const RelatedAnnouncesProvider = (props) => {
  const [relatedAnnounces, setRelatedAnnounces] = useState([
    {
      id: 2,
      title: "Chambre Simple",
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwxMHx8aG91c2V8ZW58MHx8fHwxNjE5MTA5NjY5&ixlib=rb-1.2.1",
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes",
      price: "800 DHS",
      buttonText: "Voir Details",
      city: "Casablanca",
    },
    {
      id: 1,
      title: "Appartement",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixid=MnwxODg2ODV8MHwxfHNlYXJjaHwyfHxob3VzZXxlbnwwfHx8fDE2MTkxMDk2Njk&ixlib=rb-1.2.1",
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes",
      price: "500 DHS",
      buttonText: "Voir Details",
      city: "Mohammedia",
    },
    {
      id: 4,
      title: "Chambre Double",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxODg2ODV8MHwxfHNlYXJjaHw5fHxob3VzZXxlbnwwfHx8fDE2MTkxMDk2Njk&ixlib=rb-1.2.1",
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes",
      price: "1200 DHS",
      buttonText: "Voir Details",
      city: "Agadir",
    },
    {
      id: 3,
      title: "Chambre Double",
      image: "https://i.imgur.com/4qXhMAM.jpg",
      description:
        "Chambres classiques et élégantes, aux détails contemporains et au décor raffiné. Très accueillantes",
      price: "700 DHS",
      buttonText: "Voir Details",
      city: "Rabat",
    },
  ]);

  return (
    <RelatedAnnouncesContext.Provider
      value={[relatedAnnounces, setRelatedAnnounces]}
    >
      {props.children}
    </RelatedAnnouncesContext.Provider>
  );
};
