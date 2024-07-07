import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TaskEntity from "../../entities/TaskEntity";

const TodoList = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem("taskss"));
        return storedTasks ? storedTasks : [];
    });

    useEffect(() => {
        localStorage.setItem("taskss", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = new TaskEntity(
            {
                id: Date.now(),
                title: title,
                completed: false
            }
        );
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <TodoForm addTask={addTask} />
            <h2>Lista de Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => removeTask(task.id)}>Excluir task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
