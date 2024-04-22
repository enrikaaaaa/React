import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "green")};
  color: ${(props) => (props.primary || props.secondary ? "white" : "black")};
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Button = ({ primary, secondary, children, onClick }) => {
  return (
    <ButtonWrapper
      primary={primary ? "true" : undefined}
      secondary={secondary ? "true" : undefined}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
