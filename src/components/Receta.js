import React, {useContext, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {ModalContext} from '../context/ModelContext';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Receta = ({receta}) => {
     
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const classes = useStyles();

    const { guardarIdReceta, informacion, guardarReceta } = useContext(ModalContext);
    
    const handleOpen = () => { 
          setOpen(true);
    }

    const handleClose = ()=>{
         setOpen(false);  
    }

    const mostrarIngredientes = informacion => {
         let ingredientes = [];

         for (let i = 1; i < 16; i++){
             if(informacion[`strIngredient${i}`]) {
               ingredientes.push(
                 <li>
                 { informacion[`strIngredient${i}`] }
                 { informacion[`strMeasure${i}`] }
                 </li>
               );
             }
          
         }

         return ingredientes;
    }

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
                onClick={
                    ()=>{
                        guardarIdReceta(receta.idDrink);
                        handleOpen();
                    }
                }
              >
                  Ver Receta
              </button>
              <Modal
                open = {open}
                onClose ={ ()=>{
                  handleClose();
                  guardarIdReceta(null);
                  guardarReceta({});
                } }
              >
                 <div style={modalStyle} className={classes.paper}>
                   <h2>{informacion.strDrink}</h2>
                   <h3 className="mt-4">Instrucciones</h3>
                   <p>
                     {informacion.strInstructions}
                   </p>
                   <img 
                     className="img-fluid my-4"
                     src={informacion.strDrinkThumb} 
                     alt=""
                    />
                    <h3>Ingredientes y cantidades</h3>
                    <ul>
                      {mostrarIngredientes(informacion)}
                    </ul>
                 </div>
              </Modal>
          </div>
        </div>
     );
}
 
export default Receta;