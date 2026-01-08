import React from 'react'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Fotter.jsx'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import useFetch from '../../Hooks/Fetch.jsx'



export default function GentricTables({ children, title, titleIcons, button }) {
    const { data } = useFetch();

    return (
        <Paper

            className="gentric-container"
        >
            <Card className="gentric-card">
                <Box className="gentric-header">
                    <Header
                        header={data.mockTables?.title || title}
                        headerIcon={data.mockTables?.titleIcons || titleIcons ? <StarsOutlinedIcon fontSize="large" color="primary" /> : null}
                    />
                    <Divider />
                </Box>
                <Box className="gentric-content">
                    {children}
                </Box>
            </Card>
            <Box className="gentric-footer">
                <Footer button={data.mockTables?.button || button} />
            </Box>
        </Paper>
    )
}
