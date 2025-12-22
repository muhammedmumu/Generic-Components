import DataTable from "./DataGrid";
import DataGridStyles from "../DataGridStyling/DataGridStyles";
export default {
  title: "Components/Data Grid",
  component: DataTable,
  argTypes: {
    data: { control: "" },
    columns: { control: "" },
    rowLimit: {
      control: {
        type: "number",
      },
    },
    rowCount: {
      control: {
        type: "number",
      },
    },
    rowHeight: {
      control: {
        type: "number",
      },
    },
    showCellRightBorder: { control: "boolean" },
    showColumnRightBorder: { control: "boolean" },
    disableColumnFilter: { control: "boolean" },
    disableColumnMenu: { control: "boolean" },
    loading: {
      control: "boolean",
      description: "Loading mode for the button",
      table: { category: "format" },
    },
  },
};
const Template = (args) => {
  return (
    <DataGridStyles>
      <DataTable {...args} />
    </DataGridStyles>
  );
};

export const Default = Template.bind({});

Default.args = {
  data: [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Stark", firstName: "Jhon", age: 25 },
  ],
  columns: [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      width: 90,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
  ],
  rowLimit: 5,
  rowCount: 20,
  rowHeight: 40,
  showCellRightBorder: true,
  showColumnRightBorder: true,
  disableColumnFilter: true,
  disableColumnMenu: true,
  loading: false,
};
