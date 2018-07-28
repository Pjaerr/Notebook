import React from 'react';

import styles from './Notes.scss';

import Note from './Note';

class Notes extends React.Component 
{
    state =
        {
            //Notes[] is just an array of strings.
            notes: [],
            isCreatingNote: false
        };

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



                <button onClick={() => { this.setState({ isCreatingNote: true }) }}>
                    Create Note +
                </button>
            </section>
        );
    }
}

export default Notes;
