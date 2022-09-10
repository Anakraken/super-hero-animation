import React from 'react'
import { 
    LoaderContainer,
    Bubble
} from './loader_styles';

const Loader = () => {
    return (
        <LoaderContainer className='loader'>
            <Bubble />
            <Bubble />
            <Bubble />
        </LoaderContainer>
    )
};

export default Loader;
