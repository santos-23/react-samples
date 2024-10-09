import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "React"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Vue"
            })
        },3000)
    }

    render(){
        console.log('parent component render')
        return(
            <div>I'm the parent component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp;