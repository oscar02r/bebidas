import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetaContext';
import ListaRecetas from './components/ListaRecetas';

function App() {
  return (
    <CategoriasProvider>
    <RecetasProvider>
       <Header/>
       <div className="container mt-5">
         <div className="row">
            <Formulario/>
         </div>
         
         <ListaRecetas
         
         />
       </div>
    </RecetasProvider> 
    </CategoriasProvider>
  );
}

export default App;
