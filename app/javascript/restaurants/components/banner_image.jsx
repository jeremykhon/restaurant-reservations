import React, { Component } from 'react';
import musselsAndWine from 'images/mussels_and_wine.jpg';
import pastaInSkillet from 'images/pasta_in_skillet.jpg';
import steak from 'images/steak.jpg';
import logo from 'images/logo.svg';


class BannerImage extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.changeCurrentImage, 5000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleOpacity = number => (number === this.state.currentImage ? 1 : 0)

  changeCurrentImage = () => {
    const { currentImage } = this.state;
    if (currentImage < 3) {
      this.setState({ currentImage: currentImage + 1 });
    } else {
      this.setState({ currentImage: 1 });
    }
  }

  render() {
    return (
      <div className="banner-image-container">
        <div className="banner-image" style={{ opacity: this.toggleOpacity(1), backgroundImage: `url(${musselsAndWine})` }} />
        <div className="banner-image" style={{ opacity: this.toggleOpacity(2), backgroundImage: `url(${steak})` }} />
        <div className="banner-image" style={{ opacity: this.toggleOpacity(3), backgroundImage: `url(${pastaInSkillet})` }} />
        <div className="banner-content-container">
          <img className="logo" src={logo} alt="eatigo-logo" />
          <div className="banner-text">
            reservations with discounts
          </div>
        </div>
      </div>
    );
  }
}

export default BannerImage;
