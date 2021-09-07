import React from "react";
import { TodoContext } from "../TodoContext";


function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return <h2 className = "bg-purple-600 text-white text-center max-w-2xl text-3xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 border-gray-400 rounded-lg" > You've done {completedTodos} of {totalTodos} TODO's </h2>;
}

export { TodoCounter };