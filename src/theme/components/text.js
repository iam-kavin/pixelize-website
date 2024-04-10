const baseStyle = {
  color: "black.900_02",
  fontFamily: "Lexend",
};
const sizes = {
  "5xl": {
    fontSize: '{"md":"64px","base":"48px"}',
    fontWeight: 400,
  },
  xs: {
    fontSize: "10px",
    fontWeight: 400,
  },
  lg: {
    fontSize: "18px",
    fontWeight: 400,
  },
  "6xl": {
    fontSize: '{"md":"80px","base":"48px"}',
    fontWeight: 300,
  },
  "7xl": {
    fontSize: '{"md":"128px","base":"48px"}',
    fontWeight: 300,
  },
  "8xl": {
    fontSize: '{"md":"400px","base":"48px"}',
    fontWeight: 300,
  },
  s: {
    fontSize: "14px",
    fontWeight: 400,
  },
  "2xl": {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 400,
  },
  "3xl": {
    fontSize: '{"md":"32px","base":"28px","sm":"30px"}',
    fontWeight: 300,
  },
  "4xl": {
    fontSize: '{"md":"40px","base":"36px","sm":"38px"}',
    fontWeight: 300,
  },
  xl: {
    fontSize: "20px",
    fontWeight: 400,
  },
  md: {
    fontSize: "16px",
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "lg",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
