import React, { Component } from 'react';
class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     imageURL: "https://i.pinimg.com/originals/62/f3/09/62f3098b846844521d619f45385c7003.jpg",
    //     tags: ['tag1','tag2','tag3']
    // };
    //creating counter as a controlled component: doesn't have its own local state and is controlled by its parent
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     //binding our actual this to the handler function, so that the actual, bada waala this is available to it
    //     //but constructor is a little noisy, use arrow function
    // }
    // handleIncrement = () => {
        // console.log("Increment Clicked",this);
        //this is undefined here without binding, because everything has it's own this
        //we don't modify the state directly in react, this.state.count++ won't work, we need to explicitly tell react what has changed
        // this.setState({count: this.state.count + 1});
        //this staement will tell react that the state is gonna change, an async call to the render method, which will return new react element , it will compare virtual dom with the actual dom and will only update the element which has to be updated
        // console.log(this.props,"props")

    // };
    //state holds any data that this component may need dynamically, like instead of hello world, some dynamic data
    renderTags(){
        if (this.state.tags.length === 0){
            return <p>No Tags!</p>;
        }
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }
    render() { 
        // let classes = this.getBadgeClasses();
        //rendering a class dynamically
        //to render things conditionally, we can either use js if else in a method, because no if-else otherwise
        // console.log(this.props);
        return (
            <React.Fragment>
                {/* {this.props.children} */}
                {/* <img src={this.state.imageURL}/> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul> */}
                    {/* { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} */}
                    {/* mapping a tag ie element of an array to a react element, but without key value, all children of the tags list will have the same key property and no differentiation between any of them
                    in handling events, we pass a refernce to the event handling function and not the function it self 
                    to pass arguments, we need to write an inline function like onClick={ () => this.handleIncrement(argument) }*/}
                    
                {/* </ul> */}
                <button onClick={() => 
                    this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* deleteing a counter, we have to delete it from the counters array. The component that owns a piece of the state should be the one modifying it. So Counters should be modifying that array, since it is held in its state. To communicate between counter and counters, since delete method in counter, we'll raise an event and counters will handle the delete thingie. We will do this using props, state is private, local to a component, props can be interacted with. onDelete is the prop specified in counters for counter child*/}
                <div> 
                    {/* { this.state.tags.length===0 && "Please add a tag!"} */}
                    {/* this is a a javascript thingie, which returns a truesy ie non-empty string or non-zero number if the boolean holds true ie length===0 &&  */}
                    {/* { this.renderTags() } */}
                </div>
            </React.Fragment>
        ); 
        //like that ReactDOM.render, but now its automatic rendering
        //rendering 2 tags without a wrapper will confuse babel in terms of what element it should return, because essentially, ReactDOM.createElement('type',element) is happening, and type can be h1 or button, but which one? One soln: wrap in a div
        //React.Fragment is for removing an unnecessary wrapper div
        //inside curly braces, any valid js statement
        //jsx expressions are just like normal javascript expressions that can be returned, assigned etc
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        if (value===0){
            return "Zero";
        }
        return value;
    }
}
 
export default Counter;