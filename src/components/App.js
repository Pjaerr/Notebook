import React from 'react';

import styles from './App.scss';

import Todo from './Todo';

class App extends React.Component 
{

  /* 
      * Load all data in here and then pass each specific part through to the relevant
      * components.
  */

  mockTask =
    {
      id: "task0",
      name: "Complete this task",
      dueDate: "22-07"
    };
  mockTask2 =
    {
      id: "task1",
      name: "Test task",
      dueDate: "22-07"
    };
  mockTask3 =
    {
      id: "task2",
      name: "Complete this task please",
      dueDate: "23-07"
    };



  mockTodoData =
    {
      tasks: [this.mockTask, this.mockTask2, this.mockTask3],
      lastOpenedDate: "22-07"
    };

  render()
  {
    return (
      <div className={styles.app}>
        <Todo todoData={this.mockTodoData} />
      </div>
    );
  }
}

export default App;
