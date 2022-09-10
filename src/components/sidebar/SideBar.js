import React from 'react'
import { 
    AsideContainer,
    SideTitle,
    SuperHeroImage,
    SideColum,
    Floating
} from './SideBar_styles';


const SideBar = () => {
    return (
        <AsideContainer className="aside">
            <SideTitle>Superman</SideTitle>
            
            <Floating>
                <SuperHeroImage src="https://i.ibb.co/x16pz1x/super-man.png" alt="super" />
            </Floating>
            
            <SideColum />
        </AsideContainer>
    )
};

export default SideBar;
