import { Component } from "react";

class API extends Component{
    state ={
        data : ['one','two']
    }

    // componentDidMount(){
    //     let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=java";
    //     fetch(url)
    //     .then((result)=>result.json())
    //     .then((result)=>{
    //         this.setState({data:result})
    //     })
    // }

    render(){
        
        const list = this.state.data.map((val,index)=>{
            return <li key={index}>{val}</li>
        })

        return(
            <ul>
                {list}
            </ul>
        )
    }
}

export default API;