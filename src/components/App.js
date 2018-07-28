import React from 'react';

import styles from './App.scss';

import Notes from './Notes';

class App extends React.Component 
{
  render()
  {
    return (
      <div className={styles.app}>
        <Notes />
      </div>
    );
  }
}

export default App;
