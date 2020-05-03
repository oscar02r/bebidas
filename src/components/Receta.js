import React from 'react'

const Receta = ({receta}) => {
    return ( 
        
        <div className="col-md-4 mb-3">
          <div className="card">
              <h2 className="card-header">{receta.strDrink}</h2>
              <img 
                src={ receta.strDrinkThumb } 
                alt={ receta.strDrinkThumb }
                className="card-img-top"
              />
              <button
                type="button"
                className="btn btn-block btn-primary"
              >
                  Ver Receta
              </button>
          </div>
        </div>
     );
}
 
export default Receta;