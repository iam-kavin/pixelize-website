import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  xs: defineStyle({
    h: "35px",
    px: "12px",
  }),
  sm: defineStyle({
    h: "56px",
    fontSize: "16px",
    px: "24px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      light_green_A200: {
        bg: "light_green.A200",
        color: "black.900_02",
      },
      amber_300: {
        bg: "amber.300",
        color: "black.900_02",
      },
      black_900_02: {
        bg: "black.900_02",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["light_green_A200"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_500: {
        borderColor: "gray.500",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_500"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "sm",
  },
});
export default Button;
