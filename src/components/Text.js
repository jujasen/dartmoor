import PropTypes from 'prop-types';

const Text = (props) => {
    const { text, bold, uppercase, capitalize, center, small, nomarg, padding } = props;

    return (
        <p className={`text 
        ${bold ? 'text--bold' : ''} 
        ${uppercase ? 'text--uppercase' : ''}
        ${capitalize ? 'text--capitalize' : ''}
        ${center ? 'text--center' : ''}
        ${small ? 'text--s' : ''}
        ${nomarg ? 'text--nomarg' : ''}
        ${padding ? 'text--pad' : ''}
        `}>{text}</p>
    );
}

export default Text;

Text.propTypes = {
    text: PropTypes.string,
};