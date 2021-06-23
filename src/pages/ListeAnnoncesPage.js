import React from 'react';

import Filtres from  "../components/filtres/Filtres";
import Cards from "../components/Card/Cards";

function ListeAnnoncesPage() {


   const [post,setPost]= React.useState([])

    return (
        <div>
            <Filtres setpost={setPost} />
            <Cards />
        </div>
    );
};

export default ListeAnnoncesPage
