// import React from 'react';
import './styles.css';

import React, { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd(e);
    if (inputRef.current !== null) {
        inputRef.current.blur();
    }
};

return (
    <form className="input" onSubmit={handleSubmit}>
        <input
            ref={inputRef}
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter your wishlist..."
            className="input_box"
        />
        <button type="submit" className="input_submit">
            Submit
        </button>
        </form>
    );
};

export default InputField;


// interface props{
//     todo : string;
//     setTodo : React.Dispatch<React.SetStateAction<string>>
//     handleAdd : (e:React.FormEvent) => void ;
// }

// const InputField: React.FC<props> = ({todo,setTodo,handleAdd}) =>{
//     // const inputRef = useRef<HTMLInputElement | null>(null)
//     return(
//         <form className="input" onSubmit={(e)=>{
//             handleAdd(e);
//             // inputRef.current?.blur();
//         }}>
//             <input type="input" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="Enter your wishlist..." className="input_box" />
//             <button type="submit" className="input_submit">Submit</button>
//         </form>
//     )
// }

// export default InputField;