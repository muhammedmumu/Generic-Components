import AlertComponent from "./index";

export default {
  title: "Components/Alert",
  component: AlertComponent,
  argTypes: {
    severity: {
      options: ["error", "warning", "info", "success"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <AlertComponent  {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  severity: "error",
  message:"left"
};
