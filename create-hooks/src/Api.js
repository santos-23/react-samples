import { Component } from "react";

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            dataIsLoaded : false
        };
    }
    

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then((res)=>res.json())
            .then((result)=>{
                this.setState({
                    items: result,
                    dataIsLoaded: true
                })
            })
    }

    render(){
        const {dataIsLoaded,items} = this.state;
        if(!dataIsLoaded){
            return(
                <div>
                    <h2>unable to fetch the data from the URL</h2>
                </div>
            )
        }
        return(
            <div>
                <h2>Fetched data from URL using React</h2>
                {
                    items.map((item)=>(
                        <ol key={item.id}>
                            <li>User_Name: { item.username },
                            Full_Name: { item.name},
                            User_Email: { item.email }</li>
                        </ol>
                    ))
                }
            </div>
        )
    }
}

export default Api;