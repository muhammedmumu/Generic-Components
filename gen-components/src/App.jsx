import { Box } from "@mui/material";
import BaseWidget from "./Component/GenricWidget/BaseWidget";
import GenericDataTable from "./Component/GenricWidget/GenericDataTable";
import InsightsList from "./Component/GenricWidget/InsightsList";
import DownloadIcon from "@mui/icons-material/Download";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PrintIcon from "@mui/icons-material/Print";
import { tableConfigs, mockData, columnDefinitions, insightsData } from "./data/tableConfigs";
import { Print } from "@mui/icons-material";

export default function App() {
  const iconMap = {
    ListAltIcon: <ListAltIcon />,
    DownloadIcon: <DownloadIcon />,
    PrintIcon: <PrintIcon />,
  };

  return (
    <>
      <Box sx={{ 
        p: 3, 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        alignItems: "flex-start",
        gap: 3 
      }}>

        {tableConfigs.map((config) => (
          <BaseWidget
            key={config.id}
            header={{
              icon: config.icon && iconMap[config.icon],
              title: config.title,
            }}
            footer={{
              download: config.buttons.includes("Download")
                ? {
                  label: "Download Table Data",
                  icon: <DownloadIcon />,
                }
                : null,
              viewAll: config.buttons.includes("View All") ? { label: "View All" } : null,

              printCSV: config.buttons.includes("Print") ? { label: "Print", icon: <Print /> } : null,
            }}
          >
            <GenericDataTable
              rows={mockData[config.dataKey]}
              columns={columnDefinitions[config.dataKey]}
              pageSize={config.pageSize}
              pagination={config.pagination}
              checkbox={config.checkbox}
              sorting={config.sorting}
              filtering={config.filtering}
              rowSelection={config.rowSelection}
              loading={config.loading}
              sortingMode={config.sortingMode}
            />
          </BaseWidget>
        ))}

        {/* Insights Widget */}
        <BaseWidget
          header={{
            title: {
              parts: [
                { text: "Insights ", color: "#000" },
                { text: "and Actions", color: "#1976d2" },
              ],
            },
          }}
        >
          <InsightsList data={insightsData} />
        </BaseWidget>

      </Box>
    </>
  );
}

