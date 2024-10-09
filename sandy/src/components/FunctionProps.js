import React from "react";

function FunctionProps(props){
    return(
        <div>
            <h5>This is functional compenent</h5>
            <h2>hello {props.name} from {props.place}</h2>
        </div>
    )
}

export default FunctionProps;