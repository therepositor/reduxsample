import React, { Component } from 'react'
class Form extends Component {
    constructor(props)  {
        super(props)   
    }
     
    render() {
        
        return (
            <div>
              <form onSubmit={this.props.onSubmit}>
                 <button type='submit'>Add</button>
                  <input 
                   type="text" 
                   name="bug" 
                   onChange={this.props.onChange} 
                   value={this.props.bug}/>  
              </form>  
            </div>
        )
    }
}
export default Form
