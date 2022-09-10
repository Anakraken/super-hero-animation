import React from 'react'
import { 
  ModalContainer,
  Slider,
  Cards,
  CardItem  
} from './Modal_styles';
import Carousel from '../Carousel';

const Modal = ({visible, children}) => {
  const img = {
    img1: "https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png",
    img2:"https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png",
    img3: "https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png"
  }

   return (
    <ModalContainer
    id='modal' 
    className={!!visible.hidden && 'hidden'}
    onClick={() => visible.setHidden(!visible.hidden)}
    >


    {/* <Carousel /> */}

      {children}
    


    <Slider>
      <input type="radio" id="radio-1" name="slider" defaultChecked/>
      <input type="radio" id="radio-2" name="slider"/>
      <input type="radio" id="radio-3" name="slider"/>
      

      <Cards>
        <CardItem for='radio-1' id='card-1'>
          <img src={img.img1} alt='spidy' />
        </CardItem>
        <CardItem for='radio-2' id='card-2'>
          <img src={img.img2} alt='spidy2' />
        </CardItem>
        <CardItem for='radio-3' id='card-3'>
          <img src={img.img3} alt='spidy3' />
        </CardItem>
      </Cards>
    </Slider>

    </ModalContainer>
  )
}

export default Modal;
