import { createContext, useState } from "react";
import LoginContextProvider from "./LoginContext";



export let FavouriteContext = createContext(
    {
        nbFavourites : 0,
        tabFavourites : [],
        addFavourite : () => { },
        removeFavourite : () => { },
        isFavourite : () => { }
    }
)

function FavouriteContextProvider(props) {
    const [tab, setTab] = useState([]);
    
    function ajouterFavori(film) {
        setTab((previous) => {
            return [...previous, film]
        })
    }
    
    function supprimerFavori(idFilm) {
        setTab(previous => {
           return previous.filter(f => f.id != idFilm)
        })
    }
    
    function estFavori(idFilm) {
        return tab.some(f => f.id == idFilm)
    }
    
    let c = {
        nbFavourites : tab.length,
        tabFavourites : tab,
        addFavourite : ajouterFavori,
        removeFavourite : supprimerFavori,
        isFavourite : estFavori
    }
    
    
    
    
    return <FavouriteContext.Provider value={c}>
        { props.children }
    </FavouriteContext.Provider>
}


export default FavouriteContextProvider;
