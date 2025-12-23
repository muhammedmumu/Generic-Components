import React, { Children } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Fotter.jsx'
import EditIcon from '@mui/icons-material/Edit';
import { mockTables } from '../../../MockDAta/mock.js'


export default function GentricTables({ children }) {

    return (
        <>
            {mockTables.map(item =>
                <Card
                    key={item.id}
                    sx={{
                        p: 2,
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 4,
                        boxShadow: 'none',
                        mb: 3,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }
                    }}
                    variant="outlined"
                    elevation={0}
                >
                    <Card
                        elevation={3}
                        sx={{
                            borderRadius: '16px 16px 0 0',
                            overflow: 'hidden',
                            backgroundColor: '#ffffff'
                        }}
                    >
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                borderBottom: '1px solid #e0e0e0',
                                backgroundColor: '#fafafa'
                            }}
                        >
                            <Header
                                header={item.title}
                                headerIcon={item.titleIcons ? <EditIcon sx={{ width: 24, height: 24, color: 'primary.main' }} /> : null}
                            />
                        </Box>
                        <Box

                        >
                            {children}
                        </Box>
                    </Card>
                    <Box

                    >
                        <Footer button={item.button} />
                    </Box>
                </Card>)}
        </>
    )
}
