import React from 'react';

import styles from './CreateNote.scss';

const CreateNote = (props) =>
{
    if (props.isVisible)
    {
        return (
            <div className={styles.createNote}>
                <textarea rows="4" cols="50">
                </textarea>
            </div>
        );
    }
    else
    {
        return null;
    }
}

export default CreateNote;
