import PropTypes from 'prop-types';

const Heading = (props) => {
    const { title, bold, uppercase, capitalize, center, dark, green, big, nomarg } = props;

    return (
        <h2 className={`heading 
        ${bold ? 'heading--bold' : ''} 
        ${uppercase ? 'heading--uppercase' : ''} 
        ${capitalize ? 'heading--capitalize' : ''}
        ${center ? 'heading--center' : ''}
        ${dark ? 'heading--dark' : ''}
        ${green ? 'heading--green' : ''}
        ${big ? 'heading--big' : ''}
        ${nomarg ? 'heading--nomarg' : ''}
        `}>{title}</h2>
    );
}

export default Heading;

Heading.propTypes = {
    title: PropTypes.string,
};