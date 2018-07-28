import React from 'react';

import styles from './CreateNote.scss';

class CreateNote extends React.Component
{
    state =
        {
            value: ""
        };

    handleChange = (event) =>
    {
        this.setState({ value: event.target.value });
    }

    createNote = (actionCancelled) =>
    {
        if (actionCancelled)
        {
            this.props.addNote("");
        }
        else
        {
            this.props.addNote(this.state.value);

            this.setState({ value: "" });
        }

    }

    render()
    {
        if (this.props.isVisible)
        {
            return (
                <div className={styles.createNote}>
                    <textarea className={styles.textArea} value={this.state.value} onChange={this.handleChange}>
                    </textarea>
                    <div className={styles.buttons}>
                        <button onClick={() => { this.createNote(true) }}>
                            <img src={require('../resources/close-circle.svg')} alt="cancel note creation" />
                        </button>
                        <button onClick={() => { this.createNote(false) }}>
                            <img src={require('../resources/plus-circle.svg')} alt="create note" />
                        </button>
                    </div>
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}

export default CreateNote;
