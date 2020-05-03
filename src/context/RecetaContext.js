import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = ({children}) => {
    const [ recetas, guardarRecetas ] = useState([]);
    const [ busqueda, buscarRecetas ] = useState({
        nombre:'',
        categoria: ''
    });
    const [consultar, guardarConsultar] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {

        const obtenerRecetas = async () =>{
            if (consultar) {
                
                const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
   
                const resp = await axios.get(url);
                guardarRecetas(resp.data.drinks);
                guardarConsultar(false);
            }
        }

        obtenerRecetas();
        // eslint-disable-next-line
    }, [busqueda])
    return ( 
        
        <RecetasContext.Provider
          value={{
               recetas,
               buscarRecetas,
               guardarConsultar,
          }}
        >
           {children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;