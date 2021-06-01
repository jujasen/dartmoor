import PropTypes from 'prop-types';

const Heading = (props) => {
    const { title, bold, uppercase, capitalize, center, dark, green } = props;

    return (
        <h2 className={`heading 
        ${bold ? 'heading--bold' : ''} 
        ${uppercase ? 'heading--uppercase' : ''} 
        ${capitalize ? 'heading--capitalize' : ''}
        ${center ? 'heading--center' : ''}
        ${dark ? 'heading--dark' : ''}
        ${green ? 'heading--green' : ''}
        `}>{title}</h2>
    );
}

export default Heading;

Heading.propTypes = {
    title: PropTypes.string,
};