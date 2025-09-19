import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "High" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "Low" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}  
        />
      ))} 
    </div>
  );
}

export default App;
