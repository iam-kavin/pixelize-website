import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  field: {
    color: "blue_gray.100_01",
    fontSize: "14px",
    fontWeight: 300,
    borderColor: "gray.800",
    borderWidth: "1px",
    bg: "gray.900_02",
    alignSelf: "stretch",
    borderRadius: "12px",
  },
});

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "14px",
      px: "33px",
      height: "58px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_900_02: {
        field: {
          bg: "gray.900_02",
          color: "blue_gray.100_01",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_900_02"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
