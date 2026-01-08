import Typography from '@mui/material/Typography';
import Buttons from '../Button/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
export default function Lists() {
    return (
        <>
            <Paper
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="outlined" label="Action" sx={{ m: 1 }} />
            </Paper>
            <Divider />
            <Paper
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="outlined" label="Action" sx={{ m: 1 }} />
            </Paper>
            <Divider />
            <Paper
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="outlined" label="Action" sx={{ m: 1 }} />
            </Paper>
            <Divider />
        </>
    );
}
