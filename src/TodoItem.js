import React from 'react'
import './TodoItem.css';
 function TodoItem(props) {
    const onComplete = () => {
        alert('Ya completaste el Todo de "' +  props.text + '"')
    } //la vamos a llamar cuando los usuarios hagan click en el símbolo de completar (checked)

    const onDelete = () => {
        alert('"' +  props.text + '" Ha sido eliminado')
    } 
    return (


        <div className="grid justify-items-center">
            <div className="bg-white text-center m-5 rounded-xl p-4 w-2/6">
            <div className="flex justify-between space-x-5 items-center">
          <span className=
          {`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onComplete}//En este metodo onClick, voy a llamar a onComplete, no llamo a la ejecución de este método, entonces por eso le envio la funcion sin los (), si necesitara enviar los () y algun argumento, tendria q envolverla con  un =>
          >
        √
      </span>
         
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
  
           <button className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900 Icon-delete"
           onClick={onDelete}> Borrar</button>
            
    
       </div>
       </div>
       </div>
    ); 
};

export { TodoItem }
