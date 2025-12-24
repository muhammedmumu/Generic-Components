import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Fotter.jsx'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';



export default function GentricTables({ children, title, titleIcons, button }) {

    return (
        <Card
            sx={{
                p: 2,
                width: '100%',
                maxWidth: '100%',
                height: 'fit-content',
                mb: 3
            }}
            variant="outlined"
            elevation={0}
        >
            <Card
                elevation={3}
                sx={{
                    borderRadius: '16px 16px 0 0',
                    overflow: 'hidden',
                    backgroundColor: 'background.paper'
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'background.default'
                    }}
                >
                    <Header
                        header={title}
                        headerIcon={titleIcons ? <StarsOutlinedIcon fontSize="large" color="primary" /> : null}
                    />
                </Box>
                <Box
                    sx={{
                        height: 'calc(100% - 120px)',
                        overflowY: 'auto',
                        p: 2
                    }}>
                    {children}
                </Box>
            </Card>
            <Box>
                <Footer button={button} />
            </Box>
        </Card >
    )
}
