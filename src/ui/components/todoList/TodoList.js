import React, { useState, useEffect } from "react";
import TodoForm from "../todoForm/TodoForm";
import TaskEntity from "../../../entities/TaskEntity";
import styles from "./TodoList.module.css";

const TodoList = () => {
    const savedTaskList = 'taskStorage';
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem(savedTaskList));
        return storedTasks ? storedTasks : [];
    });
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    useEffect(() => {        
        localStorage.setItem(savedTaskList, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = new TaskEntity({
            id: Date.now(),
            title: title,
        });
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handlePageChange = (direction) => {
        setCurrentPage((prevPage) => {
            const maxPage = Math.ceil(tasks.length / tasksPerPage);
            if (direction === 'next' && prevPage < maxPage) {
                return prevPage + 1;
            } else if (direction === 'prev' && prevPage > 1) {
                return prevPage - 1;
            }
            return prevPage;
        });
    };

    const startIndex = (currentPage - 1) * tasksPerPage;
    const endIndex = currentPage * tasksPerPage;
    const currentTasks = tasks.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <div className={styles.scrollable}>
                <TodoForm addTask={addTask} />

                {tasks.length === 0 ? <h2>Nenhuma tarefa no momento</h2> : null}
                <ul>
                    {currentTasks.map((task) => (
                        <li className={styles.task} key={task.id}>
                            {task.title}
                            <button className={styles.removeTaskButton} onClick={() => removeTask(task.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
                {
                    tasks.length === 0 ? null
                        : <div className={styles.pagination}>
                            <button className={styles.prevPaginationButton} onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Anterior</button>
                            <button className={styles.nextPaginationButton} onClick={() => handlePageChange('next')} disabled={currentPage === Math.ceil(tasks.length / tasksPerPage)}>Próxima</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default TodoList;