import React, { useState } from "react";
import { FiEdit2, FiX, FiCheckCircle, FiMinusCircle } from "react-icons/fi";

import "./TodoItem.css";

const TodoItem = ({ todo, setTodos }) => {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    // when closing edit mode, reset the text to the original
    const toggleEditMode = () => {
        if (editMode) {
            setEditText(todo.title);
        }
        setEditMode(!editMode);
    };

    // when submitting the edit form, update the todo
    function handleEditTodo(e, id) {
        e.preventDefault();
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, title: editText } : todo
            )
        );
        setEditMode(false);
    }

    // toggle the isDone property of the todo
    const handleDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    // the edit mode form
    const todoEditMode = (
        <form
            className="edit-mode-form"
            onSubmit={(e) => {
                handleEditTodo(e, todo.id);
            }}
        >
            <input
                autoFocus
                className="edit-mode-form-input"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            />
        </form>
    );

    // the todo item when not in edit mode
    const todoNoEdit = (
        <div className={`todo-text ${todo.isDone ? "todo-text-done" : ""}`}>
            {todo.title}
        </div>
    );

    const handleDeleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className={`todo-container ${todo.isDone && "todo-done"}`}>
            <div>{todo.id}</div>
            {editMode ? todoEditMode : todoNoEdit}
            <div className="todo-icons">
                <div className="todo-icon" onClick={() => handleDone(todo.id)}>
                    {todo.isDone ? <FiMinusCircle /> : <FiCheckCircle />}
                </div>
                <div className="todo-icon" onClick={() => toggleEditMode()}>
                    <FiEdit2 />
                </div>
                <div
                    className="todo-icon"
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    <FiX />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
