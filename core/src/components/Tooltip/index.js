import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/styles";
import customTooltip from "./CustomTooltip"

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "transparent",
        padding: 0
    },
}));

export default function CustomisedTooltip({ title, message, position = "left", width = "100%", children }) {
    return (
        <StyledTooltip
            title={customTooltip({
                title: title,
                message: message,
                width: width
            })}
            placement={position}
            componentsProps={{
                popper: {
                    sx: {
                        [`& .${tooltipClasses.arrow}`]: {
                            color: (theme) => theme.palette.common.black,
                        },
                        [`& .${tooltipClasses.tooltip}`]: {
                            backgroundColor: (theme) => theme.palette.common.black,
                        },
                    },
                },
            }}
        >
            {children}
        </StyledTooltip>
    )
}