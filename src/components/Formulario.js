import React, {useContext} from 'react';

import {CategoriasContext} from '../context/CategoriaContext'

const Formulario = () => {
  const {hola} =  useContext(CategoriasContext);
    console.log(hola);
    return (
        <form 
          className="col-12"
         >
            <fieldset
              className="text-center"
            >
                  <legend>Busca bebidas por Categoría</legend> 
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                      type="text" 
                      className="form-control"
                      name="nombre"
                      placeholder ="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select name="categoria" >
                        <option value="">-- Seleciona Categoría --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                      type="text" 
                      className="btn btn-block btn-primary"
                      value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
      );
}
 
export default Formulario;