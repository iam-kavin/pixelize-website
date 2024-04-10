import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const sizes = {
  xs: defineStyle({
    control: {},
    label: {},
  }),
  sm: defineStyle({
    control: {
      h: "16px",
      w: "16px",
    },
    label: {},
  }),
};

const variants = {
  primary: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      control: {
        control: {
          _checked: {},
        },
      },
    };

    return colorCombinations[colorScheme] || colorCombinations["control"];
  }),
};

const Checkbox = defineStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "sm",
  },
});
export default Checkbox;
