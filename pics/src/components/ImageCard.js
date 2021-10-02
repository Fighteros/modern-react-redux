import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        // creating instance variable 
        // creating a refernce 
        // ref element is the info about a jsx tag element 
        this.imageRef = React.createRef();

        this.state = { spans: 0 }
    }

    componentDidMount() {
        // once image loads it emits a load event
        this.imageRef.current.addEventListener('load', this.setSpans)
    }


    // set spans for an image
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;


