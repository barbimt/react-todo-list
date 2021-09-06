import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();//nos permite crear contextos q son las herramientas q nos van a dar los providers y consumers para compartir el estado por todos los compnentes de nuestra app


//En TodoContext tenemos dos componentes: provider y consumer

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

      const completedTodos = todos.filter(todo => !!todo.completed).length //cada vez q cambien los todos o nuestro searchvalue, vamos a volver a hacer esta cuenta, cuantos todo se han marcado como completado. Podemos ir a nuestro array de todos y llamar al metodo filter, porqe esta variable de todos es un array, y aca podemos filtrar nuestro todos examinando haber si cada todo tiene su propiedad todo.completed como true  
      const totalTodos = todos.length
    
      let searchedTodos = []; //array vacio
    
      if (!searchValue.length >= 1) //en caso de q esto no sea cierto, nuetros todos deben mostrarse completos
      {
        searchedTodos = todos;
      } //vamos a ver si nuestro seacrhValue, la longitud de este string es mayor o igual a 1, esto es para ver si no han escrito nada en nuestro input o si ya escribieron algo. 
      else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
    
      } //si los usuario ya escribieron algo en el input, vamos a filtrar la cantidad de todo's q guardamos en esta lista 
    
      //Para marcar completado el todo:
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        //newTodos[todoIndex].completed = true
    
        saveTodos(newTodos);
      }
    
      //para borrar todos:
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      //Añadir todo
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        }) 
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            setOpenModal,
            openModal,
        }}>
            {props.children}

        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
