import React, { Component } from "react";
import UpdatedComp from "./HigherOrder";

export class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    hoverCount = () =>{
        this.setState({count: this.state.count + 1});
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <button onMouseEnter={this.hoverCount}>
                    {this.props.name} Hovered {count} times
                </button>
            </div>
        )
    }
}

export default UpdatedComp(Counter);