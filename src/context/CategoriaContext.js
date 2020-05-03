import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CategoriasContext =  createContext();

const CategoriaProvider = ({children}) => {
    const [ categorias, guardarCategorias ] = useState([]);

    useEffect(()=>{
        const obtenerCategorias = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const resp = await axios(url);
            guardarCategorias(resp.data.drinks);

        }
        obtenerCategorias();
    },[]);

    return ( 
        <CategoriasContext.Provider
          value={{
              categorias
          }}        
        >
             {children}
        </CategoriasContext.Provider>
     );
}
 
export default CategoriaProvider;