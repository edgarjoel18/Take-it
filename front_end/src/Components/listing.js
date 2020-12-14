import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class listing extends Component {
  render() {
    //console.log(this.props.item);
    return (
      <div style={itemStyle}>
        <h2>{this.props.item.title}</h2>
        <p>{`Price: $${this.props.item.price} Type: ${this.props.item.type}`}</p>
        <p>{this.props.item.description}</p>
        <p>{`Listing id: ${this.props.item.id}`}</p>
      </div>
    );
  }
}

//class name!
listing.propTypes = {
  item: PropTypes.object.isRequired,
};

const itemStyle = {
  backgroundColor: '#e6e6e6',
  padding: '13px',
  border: '1px solid #cccccc',
  borderTop: '3px solid #e8491d',
  margin: 'auto',
  textalign: 'center',
  float: 'center',
  display: 'inline-block',
  width: '39%',
};

export default listing;
