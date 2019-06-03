import React from 'react';
import { shallow } from 'enzyme';

import BannerImage from 'restaurants/components/banner_image';

describe('BannerImage', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<BannerImage />);
    expect(wrapper.find('.banner-image')).toHaveLength(3);
  });

  it('should have correct opacity for the first image', () => {
    const wrapper = shallow(<BannerImage />);
    const receivedOpacity = wrapper.find('.banner-image').at(0).prop('style').opacity;
    expect(receivedOpacity).toBe(1);
  });

  it('should toggle opacity when currentImage state changes', () => {
    const wrapper = shallow(<BannerImage />);
    wrapper.setState({ currentImage: 2 });
    const receivedOpacityImage1 = wrapper.find('.banner-image').at(0).prop('style').opacity;
    const receivedOpacityImage2 = wrapper.find('.banner-image').at(1).prop('style').opacity;
    expect(receivedOpacityImage1).toBe(0);
    expect(receivedOpacityImage2).toBe(1);
  });
});
