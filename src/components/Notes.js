import React from 'react';

import styles from './Notes.scss';

import Note from './Note';
import CreateNote from './CreateNote';

class Notes extends React.Component 
{
    state =
        {
            //Notes[] is just an array of strings.
            notes: [],
            isCreatingNote: false
        };

    addNote = (text) =>
    {
        let { notes } = this.state;
        notes.push(text);
        this.setState({ notes, isCreatingNote: false });
    }

    renderNotes = () =>
    {
        const { notes } = this.state;

        if (notes.length > 0)
        {
            return notes.map(text => <Note text={text} />);
        }
        else
        {
            return <p>Nothing to see here 😎</p>
        }
    }

    render()
    {
        return (
            <section className={styles.notes}>
                <header>
                    <h3>Notes</h3>
                </header>
                {this.renderNotes()}

                <CreateNote addNote={this.addNote} isVisible={this.state.isCreatingNote} />

                <button onClick={() => { this.setState({ isCreatingNote: true }) }}>
                    Create Note +
                </button>
            </section>
        );
    }
}

export default Notes;
