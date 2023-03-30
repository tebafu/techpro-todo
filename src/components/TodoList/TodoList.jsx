import React from "react";

import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
    const notDoneFiltered = todos.filter((todo) => !todo.isDone);

    const doneFiltered = todos.filter((todo) => todo.isDone);

    const notDone = notDoneFiltered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
    ));

    const done = doneFiltered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
    ));

    return (
        <div className="todos">
            <div>
                <h2 className="column-header">In progress</h2>
                {notDone}
            </div>
            <div>
                <h2 className="column-header">Completed</h2>
                {done}
            </div>
        </div>
    );
};

export default TodoList;
