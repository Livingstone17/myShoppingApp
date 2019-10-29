import React, { Component} from 'react';
import NavBar from './components/navbar'
import Counters from './components/shoppingCarts';
import './App.css';
 
class App extends Component {
  state = {
        counters: [
            { id: 1, price: '#40000', availables: 40, name: 'Samsung', value: 0, Description: 'This is a phone with a difference'} ,
            { id: 2, price: '#35000', availables: 30, name: 'Nokia', value: 0, Description: 'This is a phone with a difference'} ,
            { id: 3, price: '#28000', availables: 80, name: 'LG', value: 0, Description: 'This is a phone with a difference' } ,
            { id: 4, price: '#28000', availables: 80, name: 'Bobarry', value: 0, Description: 'This is a phone with a difference' } ,
            { id: 5, price: '#30000', availables: 20, name: 'Blackberry', value: 0, Description: 'This is a phone with a difference' } ,
            { id: 6, price: '#20000', availables: 70, name: 'KiiKaa Power', value: 0, Description: 'This is a phone with a difference' } ,
            { id: 7,price: '#38000', availables: 60,  name: 'Infinix', value: 0, Description: 'This is a phone with a difference' }
        ]
    };
    
    // method to increment item's value
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
      const counters =  this.state.counters.map(c => {
            c.value = 0;
            return c;
      });
        this.setState({counters})
    };

     // method to handle delete item
    handleDelete = counterId => {
        // this.setState({ value: this.state.value.pop})
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };
  render() { 
    return (  
      
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main classname="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />
      </main>


      </React.Fragment>
           );
  }
}
 
export default App;
