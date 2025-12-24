import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AllinOne from '../Components/Cards/Gentric/AllinOne.jsx'
import Tables from '../Components/Cards/Tables/GridTable.jsx'
import { rows, columns, mockTables } from '../MockDAta/mock.js'

export default function Layout() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                py: 4
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Box
                    sx={{
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    <Box
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                            fontWeight: 800,
                            color: 'text.primary',
                            mb: 1,
                            letterSpacing: '-1px'
                        }}
                    >
                        Generic Components Dashboard
                    </Box>
                    <Box
                        component="p"
                        sx={{
                            fontSize: '1rem',
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        Reusable data tables with dynamic columns and filtering
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2
                    }}
                >
                    {mockTables.slice(0, 2).map(item =>


                        <AllinOne
                            key={item.id}
                            title={item.title}
                            titleIcons={item.titleIcons}
                            button={item.button}
                        >
                            <Tables
                                rows={rows}
                                columns={columns}
                                fields={item.fields}
                                paginationMode={item.pagination}
                                checkBox={item.checkbox}
                                filtering={item.filtering}
                                sorting={item.sorting} />
                        </AllinOne>
                    )}
                </Box>
            </Container>
        </Box>
    )
}
