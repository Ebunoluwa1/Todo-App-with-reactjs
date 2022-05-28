/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import React from "react";


const FormTodo = ({todo, setTodo,todos, setTodos, navState}) => {
    /*state hook */
    const [filterTodos, setFilterTodos] = useState(todos)    

    useEffect(() => {
       if (navState === "All") {  
            setFilterTodos(todos)
       }
       
       if (navState === "Active") {  
      const Active = todos.filter(todo => todo.completed === false );
      setFilterTodos(Active)
    }
    if (navState === "Completed") {  
       const Completed = todos.filter(todo => todo.completed === true );
        setFilterTodos(Completed)
    }
    }, [navState, todos]);


   //useEffect
 //the effect hook above is to retrieve //this saves the data on a local storage

   //helper functions
   const handleSubmit = (e) => {
        e.preventDefault();
         
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed:false
        };

      setTodos([...todos].concat(newTodo))
      localStorage.setItem("todos",JSON.stringify([...todos].concat(newTodo))) 
      setTodo("");
   };
     
   /*actions to implement*/
   function toggleComplete(id){
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo; 
            })
        )
   }
    
   function removeTodo (id) {
       setTodos(todos.filter(todo => todo.id !== id))
   }

   function removeTodos (id) {
    setFilterTodos(todos.filter(todo => todo.id === todo.completed ))
}

    return ( 
        <div className="form">
          {navState !== "Completed" && (
               <form onSubmit={handleSubmit}>
               {/* /*input and button*/ }
                <input className="input" type="text"
                value={todo}
                placeholder="add details"
                required 
               onChange={(e)=> setTodo(e.target.value)}
                />
               <button className="btn1" type="submit">Add</button>
            </form> 
         )}
            
            {filterTodos.map((todo) => 
               <div className="Todo" key={todo.id}>

                    <div className="flex">
                        <input type="checkbox" 
                        defaultChecked={todo.completed === true ? 'checked' : ''} 
                        onClick={()=>toggleComplete(todo.id)} />
                            <h3 
                        style={{textDecoration:todo.completed ? "line-through" : null}}> 
                        {todo.text} </h3> 
                   </div>

                    <span onClick={()=>removeTodo(todo.id)}>
                        {<img src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="del"/>}
                    </span>
               
               </div>)}

       { navState === "Completed" &&  <button onClick={()=>removeTodos(todos.id)} className="btn"><img className="img" src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="del"/> delete all</button>}
        </div>
     );
}
 
export default FormTodo;

//  togglecomplete={togglecomplete}