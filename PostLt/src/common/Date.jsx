import PropTypes from 'prop-types';

const Date = ({ date }) => {
    return <div>{date}</div>;
};

Date.propTypes = {
    date: PropTypes.string.isRequired,
};

export default Date;
