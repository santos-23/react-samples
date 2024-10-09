
import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import { Todo } from './model';


const App : React.FC = () => {
  const [todo,setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([])
  // const [completedTodos,setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo ,isDone:false}])
      setTodo("")
    }
  }

  console.log(todos)
  return (
        <div className="App">
            <h1 className='heading'>Todo List</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
  );
}

export default App;
