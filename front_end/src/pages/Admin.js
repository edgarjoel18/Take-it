import React, { Component } from 'react';
import Listing from '../Components/listing';
import propTypes from 'prop-types';


function ListingDisplay(props) {

  if (!props.display) {
    return null;

  }

  return props.listings.map((listing) => <Listing key={listing.id} item={listing} />);
}
class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div>
      <h2 className="listing">Admin Page</h2>
      <ListingDisplay display={this.props.listings.length > 0} listings={this.props.listings} />
    </div>
    
  );
}}

Admin.propTypes = {
  listings: propTypes.array.isRequired,
};

export default Admin;
