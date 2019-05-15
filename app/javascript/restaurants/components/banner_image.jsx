import React, { Component } from 'react';
import musselsAndWine from 'images/mussels_and_wine.jpg';
import pastaInSkillet from 'images/pasta_in_skillet.jpg';
import steak from 'images/steak.jpg';


class BannerImage extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.changeCurrentImage, 4000);
  }

  toggleOpacity = (number) => { return number === this.state.currentImage ? 1 : 0; }

  changeCurrentImage = () => {
    const { currentImage } = this.state;
    if (currentImage < 3) {
      this.setState({ currentImage: currentImage + 1 });
    } else {
      this.setState({ currentImage: 1 });
    }
  }

  render() {
    const { currentImage } = this.state
    return (
      <div className="banner-image-container">
        <div className="banner-image" style={{ opacity: this.toggleOpacity(1), backgroundImage: `url(${musselsAndWine})` }} />
        <div className="banner-image" style={{ opacity: this.toggleOpacity(2), backgroundImage: `url(${steak})` }} />
        <div className="banner-image" style={{ opacity: this.toggleOpacity(3), backgroundImage: `url(${pastaInSkillet})` }} />
        <div className="banner-content-container">
          Reservations with discounts
        </div>
      </div>
    );
  }
}

export default BannerImage;
