

export default function HeaderHook(icons = []) {
    const renderIcons = () => {
        return icons.map(icon => {
            if (icon === 'Edit') return (
                <Tooltip key="edit" title="Edit" arrow>
                    <IconButton aria-label="edit"><EditIcon /></IconButton>
                </Tooltip>
            );
            if (icon === 'Filter') return (
                <Tooltip key="filter" title="Filter" arrow>
                    <IconButton aria-label="filter"><FilterListIcon /></IconButton>
                </Tooltip>
            );
            if (icon === 'Delete') return (
                <Tooltip key="delete" title="Delete" arrow>
                    <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Tooltip>
            );
            return null
        })
    }
    return { renderIcons };
}
