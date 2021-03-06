import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import './TodoItem.css';


function TodoItem(props) {


    return (


        <div className="grid justify-items-center">
            <div className="bg-white text-center m-5 rounded-xl p-4 w-2/6 sm:w-auto">
                <div className="flex justify-between space-x-5 items-center">
                    <span className=
                        {`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                        onClick={props.onComplete}//En este metodo onClick, voy a llamar a onComplete, no llamo a la ejecución de este método, entonces por eso le envio la funcion sin los (), si necesitara enviar los () y algun argumento, tendria q envolverla con  un =>
                    >
                        <BsCheckCircle/>
                        
                    
                    </span>

                    <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                        {props.text}
                    </p>

                    <button className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900 Icon-delete"
                        onClick={props.onDelete}> Delete</button>


                </div>
            </div>
        </div>
    );
};

export { TodoItem }
