import React from 'react';
import styles from './HomePage.module.css';
import TodoList from '../components/TodoList';

const HomePage = () => {
    return (
        <div>
            <h1>To Do List</h1>
            <div className={styles.form}>
                <TodoList></TodoList>
            </div>
        </div>
    );
};

export default HomePage;
