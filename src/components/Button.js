import PropTypes from 'prop-types';

const Button = (props) => {
    const { title, type, center } = props;

    return (
        <div className="button__container">
            <button className={`button 
        ${center ? 'button--center' : ''}`} type={type}>{title}</button>
        </div>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
};