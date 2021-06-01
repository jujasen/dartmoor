import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageLink = (props) => {
    const { title, img, link } = props;

    return (
        <Link to={link}>
            <div className="imagelink f f--col f--j-center f--a-center" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`, backgroundSize: 'cover' }}>
                <h3 className="imagelink__title">{title}</h3>
            </div>
        </Link>
        
    );
}

export default ImageLink;

ImageLink.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
};