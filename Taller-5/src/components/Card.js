import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Título de la Tarjeta</h2>
            <p className={styles.description}>Descripción de la tarjeta.</p>
            <button className={styles.button}>Acción</button>
        </div>
    );
};

export default Card;
