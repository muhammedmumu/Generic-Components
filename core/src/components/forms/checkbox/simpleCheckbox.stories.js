import Checkboxes from "./simpleCheckbox";

export default {
  title: "Components/Check box",
  component: Checkboxes,
  argTypes: {
    label: "",
    LabelfontSize: { control: "" },
    size: {
      control: {
        type: "inline-radio",
        options: ["small", "medium", "large"],
      },
    },
  },
};
const Template = (args) => {
  return <Checkboxes {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Check box",
  size: "small",
  LabelfontSize: 12,
};
