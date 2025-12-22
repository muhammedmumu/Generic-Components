import { Grid, Typography } from "@mui/material";

export default function customTooltip(props) {
    const { title, message, width } = props;
    return (
        <Grid
            //container
            sx={theme => ({
                background: theme.palette.black[1000],
                flexDirection: "column",
                padding: "20px",
                width: width || "540px"
            })}
        >
            <Grid item mb={"10px"}>
                <Typography color="#fff" fontSize={"12px"} fontWeight={700}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography color="#fff" fontSize={"12px"}>
                    {message}
                </Typography>
            </Grid>
        </Grid>
    );
}