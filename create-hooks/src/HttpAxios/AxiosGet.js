import axios from "axios";
import { Component } from "react";

class AxiosGet extends Component{
    constructor(props){
        super(props);
        this.state={
            posts : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        // axios.get("/emp")
            .then(result => {
                console.log(result)
                this.setState({posts:result.data})
            })
            .catch((error)=>console.log(error))
    }

    render(){
        const {posts} = this.state;
        return(
            <div>
                {
                    posts.length > 0 ?
                    posts.map((post)=> <div key={post.id}>{post.title}</div> ) :
                    null
                }
                {/* {
                    posts.length ?
                    posts.map((post)=><div key={post.id}>{post.position}</div> ):
                    null
                } */}
            </div>
        )
    }
}

export default AxiosGet;