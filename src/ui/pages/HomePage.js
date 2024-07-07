import React from 'react';
import styles from './HomePage.module.css';
import TodoList from '../components/TodoList';

const HomePage = () => {
    return (
        <div>
            <div className={styles.form}>
                <TodoList></TodoList>
            </div>
        </div>
    );
};

export default HomePage;
