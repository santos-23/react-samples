import React, { Component } from "react";

class RegComp extends Component{
    render(){
        console.log('regular component render')
        return <div>I'm the regular component {this.props.name}</div>
    }
}

export default RegComp;