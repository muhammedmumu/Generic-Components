
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';

import { useTableConfig } from '../Hooks/useTableConfig.jsx';
import GradingIcon from '@mui/icons-material/Grading';
import GentricCard from '../Components/Gentric/GentricCard';
import Headers from '../Components/Header/Header.jsx';

import List from '../Components/lists/Lists.jsx';
export default function InsightsActions() {
    const { config, actions } = useTableConfig(2);

    if (!config) return null;

    const headerActions = [
        ...actions,
        <IconButton key="filter" size="small" title="Filter">
            <FilterListIcon />
        </IconButton>,
        <IconButton key="settings" size="small" title="Settings">
            <SettingsIcon />
        </IconButton>
    ];

    return (
        <GentricCard>
            <Box className="gentric-header">
                <Headers
                    title={config?.title || 'Insights & Actions'}
                    titleIcon={<GradingIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
                    actions={headerActions}
                    textFields={[]}
                />
            </Box>
            <Box className="gentric-content" sx={{ padding: 2 }}>
                <List />
            </Box>


        </GentricCard>
    );
}

/**
 * InsightsActions - Table #3: Decision-focused insights without exploration
 *
 * Architectural Purpose:
 * This table presents pre-computed insights requiring user action, not exploration.
 * Unlike Table #1 (explore), Table #2 (review), this table answers a specific question:
 * "What should I do next?" — action-oriented, not exploratory.
 *
 * Key Design Decisions:
 * 
 * 1. NO SORTING
 *    Insights are ordered by relevance/urgency by backend.
 *    Allowing user sorting implies equal importance—contrary to design.
 *    Users should act on top insights first.
 *
 * 2. NO PAGINATION
 *    Small, curated list (typically 5-10 items).
 *    All insights visible at once = better decision-making context.
 *
 * 3. NO FILTERING / CHECKBOX
 *    These are secondary insights; no batch operations.
 *    Single action per row: "Take Action" → orchestrates next step.
 *
 * 4. SINGLE FOOTER BUTTON ("Take Action")
 *    Clear next step. Users don't download or view—they act.
 *    Intent signals UX direction: this is a call-to-action, not a data table.
 *
 * 5. INFO ICON (not Filter/Edit/Delete)
 *    Optional context/explanation about insights.
 *    Future: Could expand into a popover with methodology/confidence.
 *
 * Why This Stays Minimal:
 * - Minimalism is intentional: insight tables suffer from "feature creep"
 * - Extra controls (sort, filter, paginate) create cognitive overhead
 * - Users should spend time *acting*, not configuring the view
 * - Constraints (no sorting) force good backend prioritization
 *
 * Scalability Pattern:
 * - Add Table #4? Change mockTables[3] config + create new .jsx file
 * - Same icon/button mapping logic applies
 * - Column derivation unchanged
 * - No component rewrites—pure config differentiation
 */
