const { useState, createContext, useContext } = require("react")

const userContext = createContext();

function UseContextHook(){
    const [user] = useState('Santos')
    return(
        <userContext.Provider value={user}>
            <h4>Hello mr.{user}</h4>
            <Comp2 />
        </userContext.Provider>
    )
}
function Comp2(){
    return(
        <div>
            <h4>Component 2</h4>
            <Comp3 />
        </div>
    )
}
function Comp3(){
    return(
        <div>
            <h4>Component 3</h4>
            <Comp4 />
        </div>
    )
}
function Comp4(){
    return(
        <div>
            <h4>Component 4</h4>
            <Comp5 />
        </div>
    )
}
function Comp5(){
    const user = useContext(userContext)
    return(
        <div>
            <h4>Hello again Mr.{user}</h4>
        </div>
    )
}


// function UseContextHook(){
//     const [user,setUser] = useState('Santos')
//     return(
//         <div>
//             <h3>Hello Mr.{user}</h3>
//             <Comp2 user={user} />
//         </div>
//     )
// }
// function Comp2({user}){
//     return(
//         <div>
//             <h4>Component 2</h4>
//             <Comp3 user={user} />
//         </div>
//     )
// }
// function Comp3({user}){
//     return(
//         <div>
//             <h4>Component 3</h4>
//             <Comp4 user={user} />
//         </div>
//     )
// }
// function Comp4({user}){
//     return(
//         <div>
//             <h4>Component 4</h4>
//             <Comp5 user={user} />
//         </div>
//     )
// }
// function Comp5({user}){
//     return(
//         <div>
//             <h4>Hello again Mr.{user}</h4>
//         </div>
//     )
// }

export default UseContextHook;