import axios from "axios";
import { Component } from "react";

class Multiples extends Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            imgCollection : ''
        }
    }

    handleInput(e){
        this.setState({imgCollection: e.target.files})
    }

    handleSubmit(e){
        e.preventDefault();
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('files', this.state.imgCollection[key])
        }
        axios.post("http://localhost:5000/uploadMultiple", formData, {
        }).then(res => {
            console.log(res.data)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Multiple File upload: </h2><br/>
                    <input type="file" name="files" onChange={this.handleInput} multiple />
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }
}

export default Multiples;