// App.js
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty dishwasher" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put it away" />
      <Task title="Tidy" deadline="Today" description="" />
    </div>
  );
}

export default App;
