import React from "react";

class ClasscomponentExample extends React.Component{
    constructor(){
        super()
        this.state ={
            name:"Hello",
            age:25
        }
    }
    changeName = ()=>{
        this.setState({
            name:"ANC"
        })
    }
    render(){
        return (
            <div>
                <h2>Class component Example</h2>
                <h3>Name is -- {this.state.name}</h3>
                <h3>Age is -- {this.state.age}</h3>
                <button onClick={this.changeName}>CHange Name</button>
                <button onClick={()=>this.setState({age:44})}>CHange Age</button>
            </div> 
        )
    }
}
export default ClasscomponentExample