import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const  ModalContext = createContext();

const ModalContextProvider = ({children}) => {

    const [ idreceta, guardarIdReceta  ] = useState(null);
    const [ informacion, guardarReceta ] = useState({});

    useEffect(()=>{
       const detalleReceta = async () => {

            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resp = await axios.get(url);
            guardarReceta(resp.data.drinks[0]);

       }
       detalleReceta();
    },[idreceta]);
    return ( 
        <ModalContext.Provider
          value={{
             guardarIdReceta,
             guardarReceta,
             informacion
          }}
        >
          {children}

        </ModalContext.Provider>
     );
}
 
export default ModalContextProvider;