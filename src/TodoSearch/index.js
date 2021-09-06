import React from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <div className="flex justify-center">
            <form>
                <div class="space-x-5">
                    <input type="text" placeholder="Search your Todo" className="pl-2 pr-2 p-2 border-2 border-purple-500 rounded-lg w-64 focus:outline-none focus:border-purple-500"
                        value={searchValue}
                        onChange={onSearchValueChange} />,
            
                </div>
            </form>
        </div>
    )
}
export { TodoSearch };