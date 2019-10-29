import React, { Component } from 'react';

class Counter extends Component { 

    render() {
        return (
            <div>
                {this.props.children} 
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Add More</button><span></span>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-sm btn-warning m-2">Reduce Qty</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">X</button>
            </div>
        );
        
    }

    //method to handle the styling of the bootstrap element
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;

    
    }
     
    // method to handle changes in the count 
    formatCount() {
        const { value: value } = this.props.counter; 
        return (
             value === 0 ? 'Zero' : value
         )  
    }
}

export default Counter;