import PropTypes from "prop-types";
import styled from "styled-components";

const HeroWrapper = styled.div`
  padding: 20px;
  background-color: ${(props) =>
    props.type === "primary" ? "#007bff" : "#28a745"};
  color: white;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const Hero = ({ type, title, subtitle }) => {
  return (
    <HeroWrapper type={type}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
