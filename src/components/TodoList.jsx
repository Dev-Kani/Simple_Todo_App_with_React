import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={uuidv4()}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList 