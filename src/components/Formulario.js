import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriaContext';
import { RecetasContext }  from '../context/RecetaContext';

const Formulario = () => {
    const { categorias    } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const obtenerDatosRecta = e => {
          guardarBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
          });
    }  
    
    const handleSubmit = e => {
          e.preventDefault();
          buscarRecetas(busqueda);
          guardarConsultar(true);
    }

    return (
        <form 
          className="col-12"
          onSubmit={ handleSubmit }
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
                      onChange ={obtenerDatosRecta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                      name="categoria" 
                      onChange={obtenerDatosRecta}
                    >
                        <option value="">-- Seleciona Categoría --</option>
                        {
                            categorias.map(categoria =>(
                                <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                      type="submit" 
                      className="btn btn-block btn-primary"
                      value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
      );
}
 
export default Formulario;