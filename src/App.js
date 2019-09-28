import React, { Component } from 'react'
import Clock from './Clock';
import './App.css';
import { Form, Button } from 'react-bootstrap';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            deadline: 'December 25, 2019',
            newDeadLine: ''
            
        }
    }

    changeDeadLIne(){
        this.setState({deadline: this.state.newDeadLine})
    }

    render() {
        return (
          <div className='App'>
            <div className='App-title'>
              Countdown To {this.state.deadline}
            </div> 
            <Clock 
              deadline={this.state.deadline}
            />
            <Form className='Deadline-input' >
              <input
                className='FromControl'
                placeholder='Enter New Date'
                onChange={event => this.setState({newDeadLine: event.target.value})}
              />
             </Form>
             <Button onClick={() => this.changeDeadLIne()}>
                  Submit
             </Button>
         </div>
        )
    }

}