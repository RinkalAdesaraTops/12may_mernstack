import React, { Component } from 'react'

class LifecycleClass extends Component {
    constructor(){
        console.log('constructor called..');        
        super()
        this.state = {
            count:10
        }
    }
    componentDidMount(){
        console.log('componentDidMount called...');  
        setTimeout(()=>{
            this.setState({
                count:15
            })
        },3000)            
    }
    static getDerivedStateFromProps(prevProps,prevState){
        console.log('getDerivedStateFromProps called');
        console.log('prev state is ');
        console.log(prevState);
        return null
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called..');
        return true
    }
    getSnapshotBeforeUpdate(pr,st){
        console.log('getSnapshotBeforeUpdate called..');
        console.log(st);
        return st
    }
    componentDidUpdate(){
        console.log('Finally component updated...');        
    }
  render() {
    console.log('render calling');  
    return (
      <div>
        <h3>Lifecycle Of ReactJS</h3>
        <h4>Count is -- {this.state.count}</h4>
      </div>
    )
  }
}
export default LifecycleClass