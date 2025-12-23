// Sample data for different tables
export const mockData = {
  apartments: [
    { id: 1, name: "Apartment A", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 2, name: "Apartment B", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 3, name: "Apartment C", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 4, name: "Apartment D", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 5, name: "Apartment E", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 6, name: "Apartment F", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 7, name: "Apartment G", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 8, name: "Apartment H", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
    { id: 9, name: "Apartment I", progress: "N/A", action1: "N/A", action2: "N/A", action3: "N/A", action4: "N/A", action5: "N/A" },
  ],
  payments: [
    { id: 1, gender: "Male", race: "Asian", ssn: "123-45-6789" },
    { id: 2, gender: "Female", race: "Caucasian", ssn: "987-65-4321" },
    { id: 3, gender: "Male", race: "African American", ssn: "456-78-9123" },
    { id: 4, gender: "Female", race: "Hispanic", ssn: "321-54-9876" },
    { id: 5, gender: "Male", race: "Asian", ssn: "789-12-3456" },
  ],
};

// Column definitions
export const columnDefinitions = {
  apartments: [
    { field: "name", headerName: "Property Name", width: 200, disableColumnMenu: true, sortable: false },
    { field: "progress", headerName: "Progress", width: 150, disableColumnMenu: false, sortable: true },
    { field: "action1", headerName: "Action 1", width: 150, disableColumnMenu: true, sortable: false },
    { field: "action2", headerName: "Action 2", width: 150, disableColumnMenu: true, sortable: false },
    { field: "action3", headerName: "Action 3", width: 150, disableColumnMenu: false, sortable: true },
  ],
  payments: [
    { field: "id", headerName: "ID", width: 100, disableColumnMenu: true, sortable: false },
    { field: "gender", headerName: "Gender", width: 150, disableColumnMenu: false, sortable: true },
    { field: "race", headerName: "Race", width: 200, disableColumnMenu: false, sortable: true },
    { field: "ssn", headerName: "SSN", width: 150, disableColumnMenu: true, sortable: false },
  ],
};

// Table configurations
export const tableConfigs = [
  {
    id: 1,
    title: "Action Plan Summary",
    icon: "ListAltIcon",
    titleIcons: true,
    dataKey: "apartments",
    buttons: ["Download", "View All"],
    pagination: true,
    checkbox: false,
    sorting: true,
    filtering: false,
    rowSelection: "none",
    loading: false,
    sortingMode: "client",
    onSelectMode: false,
    modeChange: false,
    pageSize: 5,
  },
  {
    id: 2,
    title: "Payments",
    icon: null,
    titleIcons: false,
    dataKey: "payments",
    buttons: ["Download", "Print", "View All"],
    pagination: false,
    checkbox: true,
    sorting: false,
    filtering: false,
    rowSelection: "none",
    loading: false,
    sortingMode: "client",
    onSelectMode: false,
    modeChange: false,
    pageSize: 5,
  },
];

export const insightsData = [
  {
    text: "You have received 54 negative reviews across all review sites.",
    actionLabel: "View Review Analytics",
  },
  {
    text: "Response time has increased over the last 7 days.",
    actionLabel: "View Details",
  },
];
