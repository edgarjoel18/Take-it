import React, { Component } from 'react';
import Listing from '../Components/listing';
import propTypes from 'prop-types';
import axios from 'axios';
import ListingForm from '../Components/ListingForm';
function ListingDisplay(props) {
  if (!props.display) {
    return <div>No Items Found</div>;
  } else {
    console.log(props.search);
    return props.listings
      .filter((data) => {
        if (props.search == null) return data;
        else if (
          data.title.toLowerCase().includes(props.search.toLowerCase()) ||
          data.description.toLowerCase().includes(props.search.toLowerCase()) ||
          data.type.toLowerCase().includes(props.search.toLowerCase()) ||
          data.price.toLowerCase().includes(props.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => <Listing key={data.id} item={data} />);
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
    this.handleChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.search);
  }

  render() {
    return (
      <div className='feedItems'>
        <ListingForm />
        <div style={formStyle}>
          <label htmlFor='search'>Filter Search</label>
          <input
            type='text'
            id='search'
            name='search'
            placeholder='Search Term'
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </div>

        <ListingDisplay display={this.props.listings.length > 0} listings={this.props.listings} search={this.state.search} />
      </div>
    );
  }
}

Feed.propTypes = {
  listings: propTypes.array.isRequired,
};

const formStyle = {
  backgroundColor: '#e6e6e6',
  padding: '15px',
  border: '1px solid #cccccc',
  //borderTop: '3px solid #e8491d',
  margin: 'auto',
  width: '80%',
  textalign: 'center',
};
export default Feed;
