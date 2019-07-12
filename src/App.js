import React from 'react';
import Titlehead from './head';
import NewDescript from './NewDescript';
import './App.css'


class App extends React.Component{
    state= {
        posts : [
            {data: 'Say', name: 'Marinella', description: 'dura'},
            {data: 'Say', name: 'Marinella', description: 'dura'}    
        ]
    };
    
    handleClick(index) {
        const array = this.state.posts;
        array.splice(index, 1);
        this.setState({post: array});
    }
    
    render () {
    return(
        <div>
            <div className ="toDo">
                <Titlehead message="This is to_do list"></Titlehead>
            </div>
            <button>Click me</button>
            <div>
                <NewDescript
                click = {this.handleClick.bind(0)}
                data = {this.state.posts[0].data}                
                name = {this.state.posts[0].name}
                description ={this.state.posts[0].description}/> 
                
                <br />
                <NewDescript
                click = {this.handleClick.bind(1)}
                data = {this.state.posts[1].data}                
                name = {this.state.posts[1].name}
                description ={this.state.posts[1].description}/> 
                <br />

                <NewDescript
                data = "Say something: "                
                name = "Name: "
                description ="Description" />
                <br />
               
                <NewDescript
                data = "Say something : "                
                name = "Name: "
                description ="Description" />
                <br />
            </div>
        </div> 
    );
   }
};
export default App;