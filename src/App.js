import React from 'react';
import Titlehead from './head';
import NewDescript from './NewDescript';
import './App.css'


class App extends React.Component{
    state = {
        posts: [
            {data: 'Say1', name: 'Marinella', description: 'kura'},
            {data: 'Say2', name: 'Hakeem', description: 'krutoi'},
            {data: 'Say1', name: 'Marinella', description: 'kura'},
            {data: 'Say2', name: 'Hakeem', description: 'krutoi'} 
        ]
    }
    
    handleClick = (index) => {
        const array = this.state.posts;
        array.splice(index, 1);  //delete el from array,index -where too start from , 1- how many elements removed from index and up
        this.setState({posts: array}); //substitute the original with duplicate
    }
    checkdata = () => {
        const table = this.state.posts;  //duplicate
        const res=[]; //empty string
        for(let i = 0;i < table.length; i++)
        {
            res.push( <NewDescript
                // click = {this.handleClick.bind(i)} 
                //1
                click = {() => this.handleClick(i)}
                data = {this.state.posts[i].data}                
                name = {this.state.posts[i].name}
                description ={this.state.posts[i].description}/> 
                );
        }
        return(res);
    }
    
    render () {
    return(
        <div>
            <div className ="toDo">
                <Titlehead message="This is to_do list"></Titlehead>
            </div>
            <button>Click me</button>
            <div>
            {this.checkdata()}                
            </div>
        </div> 
    );
   }
};
export default App;