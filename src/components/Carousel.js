import React from 'react'
import styled from 'styled-components';

const Slider = styled.div`
    width: 300px;
    height: 200px;
    transform-style: preserve-3d;
    margin-bottom: 60px;

  input {
    visibility: hidden;
  }

  #radio-1:checked ~ div #card-1,
  #radio-2:checked ~ div #card-2,
  #radio-3:checked ~ div #card-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
  }

  #radio-1:checked ~ div #card-2,
  #radio-2:checked ~ div #card-3,
  #radio-3:checked ~ div #card-1 {
    transform: translatex(40%) scale(0.8);
    opacity: 0.5;
    z-index: 0;
  }

  #radio-1:checked ~ div #card-3,
  #radio-2:checked ~ div #card-1,
  #radio-3:checked ~ div #card-2 {
    transform: translatex(-40%) scale(0.8);
    opacity: 0.5;
    z-index: 0;
  }

`;

const Cards = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CardItem = styled.label`
    background: var(--highlight);
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform .4s ease;
    cursor: pointer;

    display: grid;
    place-items: center;
    
    img {
        width: 100%;
    }
`;

const Carousel = () => {

    const img = {
        img1: "https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png",
        img2:"https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png",
        img3: "https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png"
    }
    return (
        <Slider>
            <input type="radio" name="slider-1" id="radio-1" checked/>
            <input type="radio" name="slider-1" id="radio-2"/>
            <input type="radio" name="slider-1" id="radio-3"/>
            
            <Cards>
                <CardItem for="radio-1" id="card-1">
                    <img src={img.img1} alt=""/>
                </CardItem>
                <CardItem for="radio-2" id="card-2">
                    <img src={img.img2} alt=""/>
                </CardItem>
                <CardItem for="radio-3" id="card-3">
                    <img src={img.img3} alt=""/>
                </CardItem>
            </Cards>

        </Slider>
    )
}

export default Carousel
