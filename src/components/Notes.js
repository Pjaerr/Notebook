import React from 'react';

import styles from './Notes.scss';

import Note from './Note';

class Notes extends React.Component 
{
    state =
        {
            notes: [] //Should just be text and then rendered as a jsx component
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
            <div className={styles.notes}>
                {this.renderNotes()}
            </div>
        );
    }
}

export default Notes;
