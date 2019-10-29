import React, { Component } from 'react';
import Counter from './shoppingCart';


class Counters extends Component {
   
    render() { 
         const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div style={{ backgroundColor: 'black' }}>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <div style={{marginLeft:'300px'}}>
                        <Counter key={counter.id}
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                            onDelete={onDelete}
                            counter={counter}>
                         <h4 style={{ color:'Yellow'}}> {counter.id} {counter.name}</h4>
                            <p style={{ color: 'white' }}>{counter.Description}</p> 
                            <span style={{ color: 'white' }}> Price: {counter.price}</span>
                            <p style={{ color: 'white' }}> Quantity Available: {counter.availables}</p>
                        </Counter><br/>
                     </div>
                )}
            </div>
        );
    }
}
 
export default Counters;