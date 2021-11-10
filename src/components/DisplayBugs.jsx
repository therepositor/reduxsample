import React, { Component } from 'react'

class DisplayBugs extends Component {
    constructor(props)  {
        super(props)
    }
    render() {
        return (
            <ul>
               {this.props.listItem} 
            </ul>
        )
    }
}
export default DisplayBugs
