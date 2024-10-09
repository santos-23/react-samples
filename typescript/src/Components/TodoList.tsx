import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import './styles.css';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList =({todos,setTodos}:Props) =>{
    return(
        <div className="container">
            <div className="todos">
                <span className="todos_heading">Active Tasks</span>
                {
                    todos.map((todo)=>(
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
            <div className="todos remove">
                <span className="todos_heading">Completed Tasks</span>
                {
                    todos.map((todo)=>(
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
        </div>
        


        // <div className="container">
        //     <Droppable droppableId="TodosList">
        //         {
        //             (provided)=>(
        //                 <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
        //                 <span className="todos_heading">Active Todos</span>
                        // {
                        //     todos.map((todo)=>(
                        //         <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                        //     ))
                        // }
        //                 </div>
        //             )
        //         }
        //     </Droppable>
        //     <Droppable droppableId="TodosRemove">
        //         {
        //             (provided)=>(
        //                 <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
        //                     <span className="todos_heading">Completed Todos</span>
        //                         {
        //                             completedTodos.map((todo)=>(
        //                                 <SingleTodo todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos} />
        //                             ))
        //                         }
        //                 </div>
        //             )
        //         }
        //     </Droppable>
            
            
        // </div>
        
    )
}

export default TodoList;