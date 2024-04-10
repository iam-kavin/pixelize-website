import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const filledStyle = defineStyle((props) => {
  const { colorScheme } = props;
  const fillColor = { blue_gray_100_01: { bg: "blue_gray.100_01" } };
  return fillColor[colorScheme];
});

const baseStyle = defineStyle((props) => ({
  filledTrack: filledStyle(props),
}));

const ProgressBar = defineStyleConfig({
  baseStyle,
  defaultProps: { colorScheme: "blue_gray_100_01" },
});
export default ProgressBar;
