import { useState , useEffect } from "react";
import React from "react";


const FormTodo = () => {
    /*state hook */
   const [todo, setTodo] = useState("");
   const [todos, setTodos] =useState([]);

   
   useEffect(() => {

       const temp =localStorage.getItem("todos")
       const loadedTodos =JSON.parse(temp)
        
       if (loadedTodos){
           setTodos(loadedTodos);
       }
   }, []);

    useEffect(()=> {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos",temp)    
    }, [todos]);


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
    setTodos(todos.filter(todos => todos.id === id))
}

    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
               {/* /*input and button*/ }
                <input className="input" type="text"
                value={todo}
                placeholder="add details"
                required 
               onChange={(e)=> setTodo(e.target.value)}
                />
               <button className="btn1" type="submit">Add</button>
               {todos.map((todo) => 
               <div className="Todo" key={todo.id}>
              <div className="flex"> <input type="checkbox" onClick={()=>toggleComplete(todo.id)} />
              <h3 
              style={{textDecoration: todo.completed ? "line-through" : null}}> {todo.text} </h3> </div>
              <span onClick={()=>removeTodo(todo.id)}>
                    {<img src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="del"/>}
                </span>
               
               </div>)}
            </form>
            <button onClick={()=>removeTodos(todos.id)}  className="btn"><img className="img" src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="del"/> delete all</button>
        </div>
     );
}
 
export default FormTodo;

//  togglecomplete={togglecomplete}