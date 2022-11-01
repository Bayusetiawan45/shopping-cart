import React from 'react'
import Slider from 'react-slick'
import { ContainerBanner, ContainerSlider } from '../atoms/container'
import { CustomImage } from '../atoms/image'
import banners from '../../data/banner.json'

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  }

  return (
    <ContainerSlider>
      <Slider {...settings}>
        {banners.map((banner) => (
          <ContainerBanner key={banner.title}>
            <CustomImage
              src={banner.path}
              alt="banner image"
              height="306px"
              width="100%"
              bradius="15px"
            />
          </ContainerBanner>
        ))}
      </Slider>
    </ContainerSlider>
  )
}
