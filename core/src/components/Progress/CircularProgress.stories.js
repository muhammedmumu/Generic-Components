import CircularProgressWithLabel from "./CircularProgress";

export default {
  title: "Components/Progress/Circular Progress",
  component: CircularProgressWithLabel,
  argTypes: {
    data: { control: "" },
    size: { control: "" },
    thickness: { control: "" },
  },
};
const Template = (args) => {
  return <CircularProgressWithLabel {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  data: 50,
  size: 100,
  thickness: 3,
};
