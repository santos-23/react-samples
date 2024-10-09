import { Component } from "react";
import DB from "./HttpAxios/db";
// import Api from "./Api";

class AppAxios extends Component{
    render(){
        return(
            <div>
                {/* <Api /> */}
                {/* <AxiosGet /> */}
                {/* <AxiosPost /> */}
                <DB />
            </div>
        )
    }
}

export default AppAxios;