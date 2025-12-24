import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography'

export default function Lists() {
    return (
        <Fragment>
            <Card sx={{
                p: 2, // padding
                m: 1, // margin
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                borderRadius: 1
            }}>
                <Typography variant="body1" color="initial">
                    You have recive <span> 59 negative rives</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere architecto ratione illo, nihil minus modi eaque dolore! Dolorem explicabo vero suscipit ipsam consectetur incidunt nam, fuga iste ea nesciunt!
                </Typography>
            </Card>
        </Fragment >
    )
}
