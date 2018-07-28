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

    createNote = () =>
    {
        this.props.addNote(this.state.value);

        this.setState({ value: "" });
    }

    render()
    {
        if (this.props.isVisible)
        {
            return (
                <div className={styles.createNote}>
                    <textarea rows="4" cols="50" value={this.state.value} onChange={this.handleChange}>
                    </textarea>
                    <button onClick={this.createNote}>
                        Create
                    </button>
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
