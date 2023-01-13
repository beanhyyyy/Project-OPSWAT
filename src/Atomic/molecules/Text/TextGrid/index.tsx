import React, { FC } from "react";

import Box from "../../../atoms/Box";
import Grid from "../../../atoms/Grid";
import Typography from "../../../atoms/Typography";

interface Props {
  label: any; // nhãn
  value?: any; // giá trị
  containerProps?: object; // tùy chỉnh container
  labelColProps?: object; // tùy chỉnh cột label
  valueColProps?: object; // tùy chỉnh cột giá trị
  labelTypoProps?: object; // tùy chỉnh typography label
  valueTypoProps?: object; // tùy chỉnh typography giá trị
  typoProps?: object; // tùy chỉnh font chữ
  hasColon?: boolean; // thêm dấu 2 chấm giữa label và value
  rightAlignedValue?: boolean; // căn phải value
  boldValue?: boolean; // in đậm giá trị
  rightAlignedLabel?: boolean; // căn phải label
  boldLabel?: boolean; // in đậm label
}

const TextGrid: FC<Props> = ({
  label,
  value,
  containerProps,
  labelColProps,
  valueColProps,
  labelTypoProps,
  valueTypoProps,
  typoProps,
  hasColon,
  rightAlignedValue,
  boldValue,
  rightAlignedLabel,
  boldLabel,
}) => {
  return (
    <Typography component="div" {...typoProps}>
      <Grid container spacing={1} {...containerProps}>
        {label && (
          <Grid item {...labelColProps}>
            <Box
              textAlign={rightAlignedLabel ? "right" : undefined}
              fontWeight={boldLabel ? 600 : undefined}
            >
              <Typography
                variant="inherit"
                component="label"
                {...labelTypoProps}
              >
                {label}
              </Typography>
              {hasColon && ":"}
            </Box>
          </Grid>
        )}
        {value !== null && value !== undefined && (
          <Grid item {...valueColProps}>
            <Box
              textAlign={rightAlignedValue ? "right" : undefined}
              fontWeight={boldValue ? 600 : undefined}
            >
              <Typography
                variant="inherit"
                component="span"
                {...valueTypoProps}
              >
                {value}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Typography>
  );
};

export default TextGrid;
