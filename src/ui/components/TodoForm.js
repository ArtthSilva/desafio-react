import React, { useState } from "react";

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
            <input
                id="task"
                name="task"
                placeholder="Nome da task"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;
