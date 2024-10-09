import { Component } from "react";

class Form extends Component{
    initialState ={
        name: "",
        job: "",
    }
    state = this.initialState;

    handleChange = (event) =>{
        // console.log(event.target.value)
        const {name,value} = event.target;
        this.setState({[name]:[value]})
    }

    submitForm = () =>{
        // console.log("submitted")
        // console.log(this.state)
        let character = this.state;
        this.props.handleSubmit(character)
        this.setState(this.initialState)
    }

    render(){
        return(
            <form>
                <label htmlFor="name">Name: </label><br/>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} /><br/>
                <label htmlFor="job">Job: </label><br/>
                <input type="text" name="job" id="job" value={this.state.job} onChange={this.handleChange} /><br/>
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;