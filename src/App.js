import Form from './components/Form';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import DisplayBugs from './components/DisplayBugs';
import { Link, Outlet } from 'react-router-dom';
import { bugAdded, bugRemoved } from './components/action/postActions';


class App extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      bugs: [],
      bug: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChange(e) {
    this.setState({bug: e.target.value});
    
  }

  handleSubmit(e) {
    e.preventDefault()
    const bug = {
      id: uuidv4(),
      description: this.state.bug,
      bug_resolved: false
    }
      
    const bugsArr = JSON.parse(localStorage.getItem('bugsArr'))
    const updatedArr = [...this.state.bugs, bug]
    
    this.setState({bugs: updatedArr})

    if (!JSON.parse(localStorage.getItem('bugsArr')))  {
         localStorage.setItem('bugsArr', JSON.stringify(bugsArr))
         console.log(bugsArr)
      } else {
          localStorage.setItem('bugsArr', JSON.stringify(updatedArr))
          console.log(updatedArr)
      }

    this.setState({bug: ''})
  }
  
  render() {
    const listItem = this.state.bugs.map(bug => {
      return (
        <li key={bug.id}>
          <Link to={`/bugs/${bug.id}`}>
             {bug.description}
          </Link>
        </li>
      )
    })
    const unsubscribe = store.subscribe(() => {
      console.log('store changed', store.getState())
    })
    store.dispatch(bugAdded('bug-one'))
    unsubscribe()
    store.dispatch(bugRemoved(1))

    
    return (
      <Provider store={store}>
          <div className="App">
             <h1>Track Bugs</h1>
             <Form
              onSubmit={this.handleSubmit}
              onChange={this.handleChange} 
              bugs={this.state.bugs}
              bug={this.state.bug}
             />
             <hr />
             <DisplayBugs listItem={listItem} />
             <Outlet />
          </div>
      </Provider>
      
    );
  }
}

export default App;
