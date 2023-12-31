import React, { useState } from 'react';

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const [editTaskId, setEditTaskId] = useState(null);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = {
        id: tasks.length + 1,
        name: inputValue,
        persons: 0,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
 };

 const handleReset = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, persons: 0 } : task
    );
    setTasks(updatedTasks);
 };

 const handleChange = (e) => {
    setInputValue(e.target.value);
 };

 const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
 };

 const handleEdit = (taskId) => {
  const task = tasks.find((task) => task.id === taskId);
  setEditTaskId(taskId);
 
 };
const handleSaveEdit = (taskId) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, name: task.name } : task
  );
  setTasks(updatedTasks);
  setEditTaskId(null);

};

const handleChangePersonsColor = (persons) => {
  if (persons === 0 && 'Zero') {
    return '#e0ba2a';
  } else {
    return 'blue';
  }
};

 const handleIncrement = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, persons: task.persons + 1 } : task
    );
    setTasks(updatedTasks);
 };

 const handleDecrement = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, persons: task.persons - 1 } : task
    );
    setTasks(updatedTasks);
 };

 return (
    <div>
      <p style={{ fontSize: 'bolder' }}>Enter Task</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Task Name"
          style={{ padding: '0.2rem' }}
        />
        <button type="submit" style={{ padding: '0.32rem', backgroundColor: 'rgb(9 97 228)', border: 'none', borderRadius: '2px', cursor: 'pointer', color: 'white' }}>Add Task</button>
      </form>
      <div>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: '-webkit-inline-box', marginTop: '20px', gap: '20px' }}>
            <button onClick={() => handleIncrement(task.id)} style={{ backgroundColor: 'grey', border: 'none', borderRadius: '2px' }}>+</button>
            <button onClick={() => handleDecrement(task.id)} style={{ backgroundColor: 'grey', border: 'none', borderRadius: '2px' }}>-</button>
            <button style={{ margin: '0', backgroundColor: handleChangePersonsColor(task.persons), border: 'none', borderRadius: '3px', fontWeight: 'bold',marginLeft:'20px', color:'white' }}>
            Persons {task.persons === 0 ? 'Zero' : task.persons}
          </button>
            {task.id === editTaskId ? (
              <input
                type="text"
                defaultValue={task.name}
                onChange={(e) => {
                 setTasks(tasks.map((t) => (t.id === task.id ? { ...t, name: e.target.value } : t)));
                }}
                style={{ padding: '0.2rem' }}
              />
            ) : (
              <p style={{ margin: '0' }}>{task.name}</p>
            )}
            <button onClick={() => handleEdit(task.id)} style={{ padding: '0.32rem', backgroundColor: '#599999', border: 'none', borderRadius: '2px', cursor: 'pointer', colorcolor:'white',marginRight:'5px'}}>
            Edit
            </button>
            <button onClick={() => handleSaveEdit(task.id)} style={{ padding: '0.32rem', backgroundColor: 'teal', border: 'none', borderRadius: '2px', cursor: 'pointer', colorcolor:'white',marginRight:'5px'}}>
        Save
      </button>
            <button onClick={() => handleDelete(task.id)}  style={{padding:'0.32rem',backgroundColor:'#dc3545',border:'none', borderRadius:'2px',cursor:'pointer',color:'white' }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default AddTask;
