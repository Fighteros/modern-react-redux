import React from 'react'


// key in every element of lists as it's 
// important to performance
const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img src={urls.regular} key={id} alt={description} />
    });

    return <div>{images}</div>;
};

export default ImageList
