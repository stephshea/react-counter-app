import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <br />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            //adds all counter props
            counter={counter}
            onDecrement={this.props.onDecrement}
            //adds all counter props
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
