import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class listing extends Component {

    render() {
        //console.log(this.props.item);
        return (
            
            <div  style = {itemStyle}>
                <h2>
                {this.props.item.title}    
                </h2>
                <p> 
                {`Price: $${this.props.item.price} Type: ${this.props.item.type}`}
                </p>
                <p> 
                {this.props.item.description}
                </p>
                
            </div>
        )
    }
}

//class name!
listing.propTypes = {
    item: PropTypes.object.isRequired
  }

  const itemStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    margin: 'auto',
  }


export default listing