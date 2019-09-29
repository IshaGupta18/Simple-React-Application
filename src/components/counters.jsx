import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    
    render() { 
        return ( <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button>
            {/* this didnt work lekin because we didn't have a single source of truth, every counter had it's local state, the value in the array is disconnected from the one we tried to set, the state thing in counter.jsx gets executed only once when the counters are created. To update it, we need to have a single source of truth */}
            { this.props.counters.map(counter => <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} >
                {/* <h6> Kid {counter.id} </h6>  */}
                {/* this becomes a child of counter and will come under this.props
                key is internal, we can't access it directly
                counter property holds all the properties of the counter, so this remains encapsulated and adding a new attribute doesn't mess here */
                }
                </Counter>
                )}
            {/* value and selected are props or properties (this.props) of the Counter component, key is a special property and hence is not listed in this.props */}
        </div> );
    }
}
 
export default Counters;