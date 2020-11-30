import React,{Component} from 'react';
import propTypes from 'prop-types';
import Listing from "../Components/listing";

class Home extends Component {
  //console.log(this.props.list);
  render(){
    //<div>
    //  <h2>Home Page</h2>
    //</div>
    console.log(this.props.listings);
  return this.props.listings.map((listing) => (
    <Listing key={listing.id} item={listing}/>
    ));  }
}

Home.propTypes = {
  listings: propTypes.array.isRequired
}


export default Home;
