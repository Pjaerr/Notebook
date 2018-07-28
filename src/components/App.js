import React from 'react';

import styles from './App.scss';

import Notes from './Notes';

class App extends React.Component 
{

  constructor(props)
  {
    super(props);

    this.notes = [];

    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++)
    {
      if (keys[i].substr(0, 4) === "note")
      {
        this.notes.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
  }


  pushNotes = (notes) =>
  {
    this.notes = notes;

    //Push data externally here.

    localStorage.clear();

    for (let i = 0; i < this.notes.length; i++)
    {
      localStorage.setItem(`note ${i}`, JSON.stringify(this.notes[i]));
    }
  }

  render()
  {
    return (
      <div className={styles.app}>
        <Notes pushNotes={this.pushNotes} externallyLoadedNotes={this.notes} />
      </div>
    );
  }
}

export default App;
