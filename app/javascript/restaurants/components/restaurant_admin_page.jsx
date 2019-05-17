import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';

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
    axios.get(`${BASE_URL}/restaurants/${restaurant}`)
      .then(response => this.setState({ restaurant: response.data }));
  }

  handleFileChange = (event) => {
    this.setState({ photo: event.target.files[0] });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', this.state.photo)
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

    axios({
      method: 'post',
      url: `${BASE_URL}/restaurants/${this.state.restaurant.id}/restaurant_photos`,
      headers: {
        'X-CSRF-Token': csrfToken,
        jwt: localStorage.getItem('jwt'),
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(response => console.log(response));
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
