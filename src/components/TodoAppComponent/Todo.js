import React, { useState } from 'react'
import { FaClipboard, FaCheck, FaPen   } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './Todo.css';

  const Todo = () => {
    const [editing, setEditing] = useState(false);
const [currentTodo, setCurrentTodo] = useState({ id: null, taskName: '', dueDate: '', taskDesc: '', clientName: '', status: '' });
    const [todos, setTodos] = useState([]);

    // function to get current date
    const getCurrentDate = () => {
      const currentDate = new Date();
      return currentDate.toDateString();
    }
    const currentDate = getCurrentDate();
    
// function to add todo

    const handleAdd = (event) => {
      event.preventDefault();
    
      if (editing) {
        setTodos(todos.map(todo => todo.id === currentTodo.id ? currentTodo : todo));
        setEditing(false);
        setCurrentTodo({ id: null, taskName: '', dueDate: '', taskDesc: '', clientName: '', status: '' });
      } else {
        const newTodo = {
          id: todos.length + 1,
          taskName: event.target.taskName.value,
          dueDate: event.target.dueDate.value,
          taskDesc: event.target.taskDesc.value,
          clientName: event.target.clientName.value,
          status: 'Pending',
        };
    
        setTodos([...todos, newTodo]);
      }
    
      event.target.reset();
    };

    // function to handle input change
    const handleInputChange = (event) => {
      setCurrentTodo({ ...currentTodo, [event.target.name]: event.target.value });
    };

    // function to handle complete todo
    const handleComplete = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, status: 'Complete'} : todo));
    };
    // function to handle delete todo
    const handleDelete = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
    // function to handle edit todo
    const handleEdit = (id) => {
      setEditing(true);
      setCurrentTodo(todos.find(todo => todo.id === id));
    };
    return (
      <>
        <div className="main_todo_container">
          <div className="todo_container">
            <div className="todo_header">
              <FaClipboard />
              <h1>My TO DO's</h1>
              <p className='current_date'>{currentDate}</p>
            </div>
            <div className="add_todo_form">
            <form onSubmit={handleAdd}> 
              
              <label htmlFor="taskName">Task Name:</label>
              <input type="text" id="taskName" name="taskName" value={currentTodo.taskName} onChange={handleInputChange} required />
             
              <label htmlFor="taskdesc">Task Desc:</label>
              <input type="text" id="taskDesc" name="taskDesc" value={currentTodo.taskDesc} onChange={handleInputChange} required/>
              
              <label htmlFor="dueDate">Due Date:</label>
              <input type="date" id="dueDate" name="dueDate" value={currentTodo.dueDate} onChange={handleInputChange} required />
             
              <label htmlFor="clientName">Client Name:</label>
              <input type="text" id="clientName" name="clientName" value={currentTodo.clientName} onChange={handleInputChange} required/>
            
             <button className="btn-primary">Add Todo</button>
            </form>
            </div>

             <div className="show_todo">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Task Name</th>
                    <th>Due Date</th>
                    <th>Task Desc</th>
                   
                    <th>status</th>
                    <th>Client Name</th>
                    <th>Options </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.taskName}</td>
                    <td>{todo.dueDate}</td>
                  <td>{todo.taskDesc}</td>
                    <td>{todo.status}</td>
                  
                    <td>{todo.clientName}</td>
        
                    <td>
                      <button onClick={() => handleComplete(todo.id)}><FaCheck /></button>
                      <button onClick={() => handleEdit(todo.id)}><FaPen /></button>
                      <button onClick={() => handleDelete(todo.id)}><MdDelete /></button>
                    </td>
                  </tr>
               ))}
                </tbody>
              </table>
             </div>
          </div>
        </div>
      </>
    )
  }

  export default Todo;
