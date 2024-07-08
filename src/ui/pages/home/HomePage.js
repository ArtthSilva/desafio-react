import React from 'react';
import styles from './HomePage.module.css';
 import TodoList from '../../components/todoList/TodoList';

const HomePage = () => {
    return (
            <div className={styles.form}>
                <TodoList></TodoList>
            </div>
    );
};

export default HomePage;