import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './media.css';
class Media extends PureComponent {
    urlImage;
    constructor(props){
        super(props)
        this.state = {
            image: props.image,
            title: props.title,
            autor: props.autor
        }
        this.urlImage = `./images/cover/${this.state.image}`;
    }

    handleClick = (event) => {
        this.props.handleClick(this.props);
    }

    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.urlImage} alt="" width={260} height={160}></img>
                    <h3 className="Media-title">{this.state.title}</h3>
                    <p className="Media-autor">{this.state.autor}</p>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio']).isRequired
}
export default Media;