import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        // creating instance variable 
        // creating a refernce 
        // ref element is the info about a jsx tag element 
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // once image loads it emits a load event
        this.imageRef.current.addEventListener('load', this.setSpans)
    }


    // set spans for an image
    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        const { description, urls } = this.props.image
        return (
            <div>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;


