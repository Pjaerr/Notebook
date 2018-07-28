import React from 'react';

import styles from './Notes.scss';

import Note from './Note';
import CreateNote from './CreateNote';

class Notes extends React.Component 
{
    state =
        {
            //Notes[] is just an array of strings.
            notes: [{ text: "Hello World!", key: "Hel" + Date.now() }, { text: "Hi Planet!", key: "Hi" + Date.now() }],
            isCreatingNote: false
        };

    addNote = (note) =>
    {
        if (note.text !== "")
        {
            let { notes } = this.state;
            notes.push(note);
            this.setState({ notes, isCreatingNote: false });
        }
        else
        {
            this.setState({ isCreatingNote: false });
        }
    }

    renderNotes = () =>
    {
        const { notes } = this.state;

        if (notes.length > 0)
        {
            return notes.map(note => <Note deleteNote={this.deleteNote} id={note.key} key={note.key} text={note.text} />);
        }
        else
        {
            return <p>Nothing to see here <span role="img" aria-label="Cool Sunglasses Emoji"> 😎 </span></p>
        }
    }

    deleteNote = (id) => 
    {
        let { notes } = this.state;

        for (let i = notes.length - 1; i >= 0; i--)
        {
            if (notes[i].key === id)
            {
                notes.splice(i, 1);
                i = 0;
            }
        }

        this.setState({ notes });
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

                <button className={styles.createNoteButton} onClick={() => { this.setState({ isCreatingNote: true }) }}>
                    <span>+</span> <span>Create Note</span>
                </button>
            </section>
        );
    }
}

export default Notes;
