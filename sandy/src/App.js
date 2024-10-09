import React from "react";
import "./App.css";

class App extends React.Component{
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }
  render(){
    return(
      <div className="App">
        {/* <ParentComp /> */}
        {/* <NameList /> */}
        {/* <h1 style={this.styles}>Welcome</h1> */}
        {/* <NewComp /> */}
      </div>
    )
  }
}

// function App() {
//   return(
//     <div class="App">
//         {/* <h1>React</h1>
//         <h1>React Components</h1>
//         <FC />
//         <ClassComp />
//         <ClassComp1 />        //components
//         <Click />
//         <Counter />
//         <ParentComp /> */}

//         {/* <ClassProps name="santos" place="Madurai"><p>Child Component</p></ClassProps>        //props
//         <ClassProps name="vasanth" place="Bangalore"><button>Click</button></ClassProps>
//         <ClassProps name="siva" place="Chennai" />
//         <FunctionProps name='vimal' place='Koomapatti' /> */}
//     </div>
//   )
// }

export default App;
