// ...existing code...
import React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import FilterListIcon from '@mui/icons-material/FilterList'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'



export default function Header({ header, icons = [], searchbar, filterbox, headerIcon }) {


    const renderIcons = () => {
        return icons.map(icon => {
            if (icon === 'Edit') return <IconButton key="edit" aria-label="edit"><EditIcon /></IconButton>
            if (icon === 'Filter') return <IconButton key="filter" aria-label="filter"><FilterListIcon /></IconButton>
            if (icon === 'Delete') return <IconButton key="delete" aria-label="delete"><DeleteIcon /></IconButton>
            return null
        })
    }

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Box
                sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {headerIcon}
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                p: '2px',
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: 'text.primary',
                                letterSpacing: '-0.5px',
                                lineHeight: 1.2
                            }}
                        >
                            {header}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        '& .MuiIconButton-root': {
                            backgroundColor: 'background.default',
                            transition: 'all 0.2s',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                transform: 'scale(1.05)'
                            }
                        }
                    }}
                >
                    {renderIcons()}
                </Box>
            </Box>

            {/* optional: render searchbar / filterbox here */}
            {searchbar && <Box sx={{ mb: 2 }}>{searchbar}</Box>}
            {filterbox && <Box sx={{ mb: 2 }}>{filterbox}</Box>}
        </Box>
    )
}
