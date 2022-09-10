import React from 'react'
import { 
    FooterContainer,
    FooterImg,
    BgImg
} from './Footer_styles';

const Footer = ({setHidden, setModalInfo}) => {
  
    const onClick = (e) => {
        setModalInfo(e.target.id);
        setHidden(prevState => !prevState)
    }

    return (
        <FooterContainer>
            <BgImg 
            id='SpiderMan'
            onClick={onClick}
            >
                <FooterImg 
                src="https://i.ibb.co/tKWqw8J/spiderman.png" 
                alt="1" 
                id='SpiderMan'
                />
            </BgImg>

            <BgImg 
            id='Robin'
            onClick={onClick}
            >
                <FooterImg 
                src="https://i.ibb.co/Xzsdvgg/robin.png" 
                alt="2" 
                id='Robin'
                />
            </BgImg>

            <BgImg 
            id='Batman'
            onClick={onClick}
            >
                <FooterImg 
                src="https://i.ibb.co/M18p91c/batman.webp" 
                alt="3" 
                id='Batman'
                />
            </BgImg>
        </FooterContainer>
    )
};

export default Footer;
