import { Component } from "react";
import UseContextHook from "./hooks/UseContextHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseStateHook";

class AppHook extends Component{
    render(){
        return(
            <div>
                <h1>useState HOOK</h1>
                <UseStateHook />
                <h1>UseEffect HOOK</h1>
                <UseEffectHook />
                <h1>UseContext HOOK</h1>
                <UseContextHook />
            </div>
        )
    }
}

export default AppHook;