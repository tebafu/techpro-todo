import React, { useState } from "react";

import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoIdTracker, setTodoIdTracker] = useState(1);

    const addNewTodo = (newTodo) => {
        if (newTodo) {
            setTodos([
                ...todos,
                { id: todoIdTracker, title: newTodo, isDone: false },
            ]);
            setTodoIdTracker((prev) => prev + 1);
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1 className="header">Task Tracker</h1>
                <InputField addNewTodo={addNewTodo} />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </div>
    );
}

export default App;
