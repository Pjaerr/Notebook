import React from 'react';

import styles from './CreateNote.scss';

class CreateNote extends React.Component
{
    state =
        {
            note: { text: "", key: "" },
        };

    handleChange = (event) =>
    {
        let text = event.target.value;

        let rand = Math.random() * text.length

        let substringLength = rand <= 10 ? rand : 5;

        let key = text.substr(0, substringLength) + Date.now();

        this.setState({ note: { text, key } });
    }

    createNote = (actionCancelled) =>
    {
        if (actionCancelled)
        {
            this.props.addNote({ text: "", key: "" });
        }
        else
        {
            this.props.addNote(this.state.note);

            this.setState({ note: { text: "", key: "" } });
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
