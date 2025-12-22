import ProgressBar from "./ProgressBar";

export default {
  title: "Components/Progress/Linear Progress",
  component: ProgressBar,
  argTypes: {
    dataValue: { control: "" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["determinate", "indeterminate", "query"],
      },
    },
  },
};
const Template = (args) => {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  dataValue: 26,
  variant: "determinate",
};
