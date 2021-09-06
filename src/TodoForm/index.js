import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
const [newTodoValue, setNewTodoValue] = React.useState('')

const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext)

const onChange = (event) => {
    setNewTodoValue(event.target.value)
}

const onCancel = () => {
    setOpenModal(false);
}

const onSubmit = (event) => {
    event.preventDefault(); //este metodo nos ayuda a q cuando el formulario se envie, donde esta el boton submit, no vamos a recargar la pagina o tratar de enviar los datos a una parte, sino q cancelamos eso
    addTodo(newTodoValue)
    setOpenModal(false);
}

return (
        <form className="Form-NewTodo"
        onSubmit={onSubmit}> 
<label htmlFor="">Escribe tu nuevo To-Do</label>
<textarea className="text-gray-800"
value= {newTodoValue}
onChange={onChange}
placeholder="Escribe una nueva tarea"
/>
<div className="TodoForm-buttonContainer">
    <button className="bg-red-500  hover:bg-red-900 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
    type="button"
    onClick={onCancel}
    >
    Cancelar 
    </button>

    <button className="bg-green-500  hover:bg-green-900 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
    type="submit"
    >
    Añadir
    </button>
</div>
      </form>
    )
}

export { TodoForm }; //lo enviamos en AppUI.js en laparte del modal