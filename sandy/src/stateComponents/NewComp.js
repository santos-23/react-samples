import React, { Component } from "react";
import bellA from "./BellA.webp";
import bellB from "./BellB.png";

class NewComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Subscribe to React",
            sub: "Subscribe",
            imageUrl: bellB
        }
    }
    styles = {
        fontStyle: 'italic',
        color: 'violet'
    }
    ButtonChange=()=>{
        this.setState({
            message: "Hit the bell icon for never miss an update",
            sub: "Subscribed"
        })
    }
    ChangeImage=()=>{
        this.setState({
            message: 'Thank you! Happy watching!',
            imageUrl: bellA
        })
    }
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                <img
                    style={{widows:'50px',height:'50px'}}
                    src={this.state.imageUrl}
                    alt=""
                    onClick={this.ChangeImage}
                />
            </div>
        )
    }
}

export default NewComp;