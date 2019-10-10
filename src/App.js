import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import Counter from './components/counter';
class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 3},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 };
//  componentDidMount(){
    //this is the place to make ajax calls and get data from the server, here, the basic rendering is done, no updations, basically like the before block. Life Cycle hooks not possible in stateless functional components
//  }
// componentDidUpdate(prevProps, prevState){
// on updation, say increment, the components are re-rendered by that doesn't mean the entire actual DOM is re-rendered, react compares the virtual DOM new and previous copy and will only change what needs to be changed
//we can check if the current and previous property of something is same, ten we don't do additional work say make an ajax call, but if they aren't, then do, basically optimizing according to the change done
// }
// componentWillUnmount(){
// just before a component is removed from the DOM
//this gives us a chance to do any kind of cleanup, like removing listeners atached to the component about to be deleted, avoiding memory leaks
// onSubmit event handles pressing enter too }
 handleReset = () => {
    const counterss=this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({counterss});
}
handleIncrement = counter =>{
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
handleDelete = counterID => {
    // console.log("Event handler in counters", counterID);
    const counterss = this.state.counters.filter(c => c.id!=counterID);
    this.setState({counters: counterss});
};
render () {

  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value >0).length} />
      <main className="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      </main>
    </React.Fragment>
  );
}
}

export default App;
