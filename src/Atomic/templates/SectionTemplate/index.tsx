import styled from "../../atoms/Styled";
import Box from "../../atoms/Box";

/**
 * Tạo khoảng cách giữa các elements
 * @param {number} spacing nhập giá trị type number/string
 */
const SectionTemplate = styled(Box, { name: "SectionTemplate" })(
  ({ theme }) => ({
    "& > *:not(:first-of-type)": {
      marginTop: theme.spacing(2),
    },
  })
);

export default SectionTemplate;
