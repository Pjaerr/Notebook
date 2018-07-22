import React from 'react';

import styles from './Todo.scss';

class Todo extends React.Component 
{
    state =
        {
            currentDate: "23-07"
        };

    /** 
     * Render all of the tasks that have the same due date as the currently
     * active date.
    */
    renderTasks = (currentDate) =>
    {
        const { todoData } = this.props;

        let tasks = [];

        for (let i = 0; i < todoData.tasks.length; i++)
        {
            let task = todoData.tasks[i];

            if (task.dueDate === currentDate)
            {
                tasks.push(<div key={task.id} className={styles.task}><input type="checkbox" id={task.id} /> {task.name} </div>)
            }
        }

        return (
            <div className={styles.taskList}>
                <h1>Tasks {`[${currentDate}]`}</h1>
                {tasks}
            </div>
        );
    }

    render()
    {
        return (
            <div className={styles.container}>
                {this.props.todoData !== undefined ? this.renderTasks(this.state.currentDate) : "No Data"}
            </div>
        );
    }
}

export default Todo;
