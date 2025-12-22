import PieChartComponent from "./PieChart";
export default {
  title: "Components/Graphs/Pie Graph",
  component: PieChartComponent,
};
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Template = (args) => <PieChartComponent mainData={data} {...args} />;

export const PieGraph = Template.bind({});

PieGraph.args = {
  mainData: data,
  colors: colors,
};
