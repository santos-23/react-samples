
import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import { Todo } from './model';


const App : React.FC = () => {
  const [todo,setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([])
  const [completedTodos,setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo ,isDone:false}])
      setTodo("")
    }
  }

  const onDragEnd = (result:DropResult) =>{
    const { source,destination } = result;
    console.log(result)
    if(!destination) return;
    if(source.droppableId===destination.droppableId && source.index===destination.index) return;

    let add,
      active=todos,
      complete=completedTodos

    if(source.droppableId === 'TodosList'){
      add=active[source.index]
      active.splice(source.index,1)
    }else{
      add=complete[source.index]
      complete.splice(source.index,1)
    }

    if(destination.droppableId === 'TodosList'){
      active.splice(destination.index,0,add)
    }else{
      complete.splice(destination.index,0,add)
    }
    
    setCompletedTodos(complete)
    setTodos(active)
  }

  console.log(todos)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
            <h1 className='heading'>Todo List</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
        </div>
    </DragDropContext>
        
  );
}

export default App;
