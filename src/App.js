import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import FormTodo from './FormTodo';
import { useState } from 'react';

const NAV_MAP ={
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
}

const NAV_NAMES = Object.keys(NAV_MAP);

function App() {
     
  const [nav, setNav] = useState('All');

  const navList =(id) => NAV_NAMES.map(todo => (
    <Navbar 
    key={todo.id} 
    todo={todo} 
    isClicked= {todo === nav}
    setNav={setNav}
    />
  ));

  return (
    <Router>
     {/* header */}
    <div className="App">
    <h1 className="title"> #todo</h1>
      <Navbar> {navList} </Navbar>
      <FormTodo />
    </div>
    </Router>
  );
}

export default App;
