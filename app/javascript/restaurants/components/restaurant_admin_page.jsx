import React, { Component } from 'react';
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
    fetch(`${BASE_URL}/restaurants/${restaurant}`)
      .then(response => response.json())
      .then(data => this.setState({ restaurant: data }));
  }

  handleFileChange = (event) => {
    this.setState({ photo: event.target.files[0] });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', this.state.photo)

    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    fetch(`${BASE_URL}/restaurants/${this.state.restaurant.id}/restaurant_photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'image/jpeg',
        'X-CSRF-Token': csrfToken,
        'jwt': localStorage.getItem('jwt'),
      },
      body: formData,
    }).then(response => response.json())
      .then(data => console.log(data));
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
