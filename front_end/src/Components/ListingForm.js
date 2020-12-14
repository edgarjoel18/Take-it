import axios from 'axios';
import React, { Component } from 'react';

export class ListingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      price: '',
      description: '',
    };

    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = {
      description: this.state.description,
      type: this.state.type,
      price: this.state.price,
      title: this.state.title,
    };

    this.setState({
      title: '',
      type: '',
      price: '',
      description: '',
    });
    console.log(item);

    axios.post('/api/createListing', JSON.stringify(item));
  }
  render() {
    return (
      <div className='feedItems'>
        <div className='postNew'>
          <form style={formStyle}>
            <h3>Create a New Posting</h3>

            <label htmlFor='title'>Title </label>
            <input
              type='text'
              id='input-title'
              name='title'
              placeholder='Enter title here'
              value={this.state.title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='type'> Type </label>
            <input
              type='text'
              id='input-type'
              name='type'
              placeholder='Enter type here'
              value={this.state.type}
              onChange={this.handleChange}
              required
            />

            <div>
              <label htmlFor='description'>Description</label>
              <br />
              <textarea
                id='input-description'
                name='description'
                placeholder='Enter Description here'
                rows='4'
                cols='58'
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='price'>Price </label>
              <input
                type='price'
                id='input-price'
                name='price'
                placeholder='Enter price here'
                value={this.state.price}
                onChange={this.handleChange}
                required
              />
            </div>
            <input type='submit' id='submit' name='submit' value='submit' onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}
const formStyle = {
  backgroundColor: '#e6e6e6',
  padding: '15px',
  border: '1px solid #cccccc',
  //borderTop: '3px solid #e8491d',
  margin: 'auto',
  width: '80%',
  textalign: 'center',
};
export default ListingForm;
