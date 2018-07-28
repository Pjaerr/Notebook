import React from 'react';

import styles from './Note.scss';

const Note = (props) =>
{
    return (
        <div className={styles.note}>
            <p>{props.text}</p>
            <button onClick={() => { props.deleteNote(props.id) }}>Delete</button>
        </div>
    );
}

export default Note;
