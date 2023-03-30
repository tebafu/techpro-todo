import React, { useState } from "react";

import "./InputField.css";

const InputField = ({ addNewTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo(newTodo);
        setNewTodo("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text"
                placeholder="Enter a new todo"
                className="form-input"
            />
            <button className="form-submit" type="submit">
                Add
            </button>
        </form>
    );
};

export default InputField;
