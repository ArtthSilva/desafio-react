import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TaskEntity from "../../entities/TaskEntity";
import styles from "./TodoList.module.css";

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
            {
                tasks.length === 0 ? <h2>Nenhuma tarefa no momento</h2> : <h2>Lista de Tarefas</h2>
            }

            <ul>
                {tasks.map((task) => (
                    <li className={styles.task} key={task.id}>
                        {task.title}
                        <button className={styles.removeTaskButton} onClick={() => removeTask(task.id)}>Excluir task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
