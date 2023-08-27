import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({banner}) => {
  return (
    <Carousel fade>

        {banner.end.map((item,index)=>(

            <Carousel.Item key={item.Image} id="banner" interval={1000} keyboard={true}>
            
            <img className="d-block w-100" id="banner-Image" src={item.image} alt={`${index} banner`} />
            <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
            </Carousel.Caption>  

            </Carousel.Item>

        ))}

    </Carousel>

  )
}

export default Banner

