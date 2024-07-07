import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== "") {
            addTask(task);
            setTask("");
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <h1>To-Do List</h1>

            <input className={styles.input}
                id="task"
                name="task"
                placeholder="Nome da tarefa"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Adicionar tarefa</button>
        </form>
    );
};

export default TodoForm;
