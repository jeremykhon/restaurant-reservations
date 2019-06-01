import React, { Component } from 'react';
import { createRestaurantPhoto } from '../actions/restaurant_photo';
import { fetchRestaurant } from '../actions/restaurant';

class RestaurantAdminPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
      photo: null,
    };
  }

  componentDidMount() {
    const { restaurant } = this.props.match.params;
    fetchRestaurant(restaurant)
      .then(response => this.setState({ restaurant: response.data }))
      .catch(error => console.log(error));
  }

  handleFileChange = (event) => {
    this.setState({ photo: event.target.files[0] });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { photo, restaurant: { id } } = this.state;
    const formData = new FormData();
    formData.append('photo', photo);
    const jwt = localStorage.getItem('jwt');
    createRestaurantPhoto(id, formData, jwt)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    const { restaurant } = this.state;
    const { user } = this.props;
    if (restaurant === null || !user.admin) {
      return <div />;
    }
    return (
      <div className="container">
        <div>
          {restaurant.name}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" name="photo" onChange={this.handleFileChange} />
          <button className="form-submit" type="submit" value="Submit">upload</button>
        </form>
      </div>
    );
  }
}
export default RestaurantAdminPage;
