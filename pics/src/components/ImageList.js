import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

// key in every element of lists as it's 
// important to performance
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list" >{images}</div>;
};

export default ImageList
