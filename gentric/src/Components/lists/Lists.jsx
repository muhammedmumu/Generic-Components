import Typography from '@mui/material/Typography';
import Buttons from '../Button/Button';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

export default function Lists() {
    return (
        <>
            <Box
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="contained" label="VIEW REVIEW ANALYTICS" sx={{ m: 1, width: '122px' }} />
            </Box>
            <Box
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="contained" label="VIEW REVIEW ANALYTICS" sx={{ m: 1, width: '122px' }} />
            </Box>
            <Box
                sx={{
                    p: 2,
                    m: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    borderRadius: 1
                }}
            >
                <Typography variant="body1" color="initial">
                    You have receive <span>59 negative reviews</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
                <Buttons variant="contained" label="VIEW REVIEW ANALYTICS" sx={{ m: 1, width: '122px' }} />
            </Box>



        </>
    );
}
