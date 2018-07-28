import React from 'react';

import styles from './Note.scss';

const Note = (props) =>
{
    return (
        <div className={styles.note}>
            <p>{props.text}</p>
        </div>
    );
}

export default Note;
