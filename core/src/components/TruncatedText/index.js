import { Typography, Tooltip, Box, tooltipClasses } from "@mui/material";
import useTruncatedText from "@turner/rt/src/hooks/useTruncatedText";
import CustomTooltipTitle from "@turner/rt/src/view/Social/components/CustomTooltip";
import { styled } from "@mui/styles";

const CustomisedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    padding: 0,
  },
}));

export default function Index(props) {
  const {
    params,
    characterLimit,
    customTooltipStyles = {},
    tooltipPlacement = "bottom",
    parentTooltipContainerStyles = {},
    width = "100%",
    customTypographyValueStyles = {},
    disablePortal = false
  } = props;

  const { isTextLong, finalText } = useTruncatedText(params?.value, characterLimit);

  return (
    <Box
      sx={{
        py: 0.5,
        ...parentTooltipContainerStyles,
      }}
    >
      <CustomisedTooltip
        title={
          isTextLong
            ? CustomTooltipTitle({
                message: isTextLong ? params?.value : "",
                width: width,
              })
            : ""
        }
        placement={tooltipPlacement}
        componentsProps={{
          popper: {
            disablePortal: disablePortal,
            sx: {
              [`& .${tooltipClasses.arrow}`]: {
                color: (theme) => theme.palette.common.black,
              },
              [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: (theme) => theme.palette.common.black,
              },

              ...customTooltipStyles,
            },
          },
        }}
      >
        <Typography
          variant="subtitle3"
          fontWeight="fontWeightMedium"
          sx={{
            ...customTypographyValueStyles,
          }}
        >
          {finalText}
        </Typography>
      </CustomisedTooltip>
    </Box>
  );
}
