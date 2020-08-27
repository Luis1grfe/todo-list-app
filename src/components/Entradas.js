import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Entradas () {

      
    const [state, setState] = useState([]);  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.texto.value);
        setState([
            ...state,
           e.target.elements.texto.value
        ])
       /* setState([
            ...state,{
                label: e.target.elements.texto.value,
                done: true
            }
           
        ])*/
        e.target.elements.texto.value = '';
    }
  
    console.log(state);
    const handleDelete = (index) => {
        state.splice(index,1);
        setState([
            ...state
        ])

    }
    
return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    <label><h1 className="display-3">Todos</h1></label>
                    <input name="texto" className="form-control" type="text"></input>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Insert</button>
               </form>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
                <ul className="list-group">{
                    state.map((item, index) => {
                       return (
                       <li className="list-group-item" key={index}>
                           <div>
                                <span>{`${item}`}</span>
                                <button name="delete" onClick={() => handleDelete(index)} type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                           </div>
                       </li>
                       )
                    })
                }
                </ul>
        </div>
        <br></br>
        <br></br>
    </div>
  );
}

export default Entradas;