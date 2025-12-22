import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useSeeMore } from "@turner/core/src/hooks/SeeMoreLess";

const Index = ({ text, maxLength = 145, customTextStyles = {}, customSeemoreTextStyles = {} }) => {
    const { expanded, toggle, displayText, isLongText } = useSeeMore(
      text,
      maxLength
    );
    const theme = useTheme();
  
    return (
      <Typography
        variant="subtitle2"
        fontWeight="400"
        sx={{
          ...customTextStyles,
        }}
      >
        {displayText}
        {isLongText && (
          <>
            {!expanded && <Box component="span">...</Box>}
            <Box
              component="span"
              onClick={toggle}
              sx={{
                color:  theme.palette.primary.main,
                cursor: "pointer",
                ml: 0.5,
                display: "inline",
                ...customSeemoreTextStyles
              }}
            >
              {expanded ? "See Less" : "See More"}
            </Box>
          </>
        )}
      </Typography>
    );
  };
  
  export default Index;
