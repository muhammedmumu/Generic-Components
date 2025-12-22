import LineGraph from "./BasicLineGraph";
const data = {
  data: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
  graphs: [
    {
      type: "monotone",
      dataKey: "uv",
      stroke: "#8884d8",
    },
    {
      type: "monotone",
      dataKey: "pv",
      stroke: "#82ca9d",
    },
  ],
};
export default {
  title: "Components/Graphs/Line Graph",
  component: LineGraph,
  argTypes: {
    legendalign: {
      options: ["left", "right", "top", "bottom"],
      control: { type: "select" },
    },
    legendlayout: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    legendVerticalAlign: {
      options: ["top", "middle", "bottom"],
      control: { type: "select" },
    },
  },
};
const Template = (args) => (
  <LineGraph
    data={data}
    width={500}
    // height={300}
    legendVerticalAling="middle"
    legendlayout="vertical"
    legendalign="left"
    // AdditonalLegendsStyles={}
    // legendsProps={}
    ShowLegends={true}
    legendType="circular"
    {...args}
  />
);
export const BasicLineGraph = Template.bind({});

BasicLineGraph.args = {
  height: 400,
  legendVerticalAlign: "bottom",
  legendlayout: "horizontal",
  legendalign: "center",
  legendType: "circular",
  width: window.innerWidth,
  data: data,
};
