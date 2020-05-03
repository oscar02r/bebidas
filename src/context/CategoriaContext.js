import React, { createContext, useState, useEffect } from 'react'

export const CategoriasContext =  createContext();

const CategoriaProvider = ({children}) => {
    const [ categoria, guardarCategoria ] = useState({});
    return ( 
        <CategoriasContext.Provider
          value={{
              categoria
          }}        
        >
             {children}
        </CategoriasContext.Provider>
     );
}
 
export default CategoriaProvider;