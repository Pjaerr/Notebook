import React from 'react';

import styles from './Note.scss';

class Note extends React.Component
{
    state =
        {
            deleteButtonClass: `${styles.deleteButton}`
        };

    deleteIsActive = false;

    handleClick = () =>
    {
        if (this.deleteIsActive)
        {
            this.setState({ deleteButtonClass: `${styles.deleteButton}` });
        }
        else
        {
            this.setState({ deleteButtonClass: `${styles.deleteButton} ${styles.active}` });
        }


        this.deleteIsActive = !this.deleteIsActive;
    }

    render()
    {
        return (
            <div className={styles.note} onClick={this.handleClick}>
                <button className={this.state.deleteButtonClass} onClick={() => { this.props.deleteNote(this.props.id) }}>Delete</button>
                <pre>{this.props.text}</pre>
            </div >
        );
    }
}

export default Note;
