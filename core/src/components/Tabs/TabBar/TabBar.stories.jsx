import { action, actions } from "@storybook/addon-actions";
import TabBar from "./index";

const Tab1 = () => {
  return <div>Tab One</div>;
};
const Tab2 = () => {
  return <div>Tab Two</div>;
};
const Tab3 = () => {
  return <div>Tab Three</div>;
};
export default {
  title: "Components/Tabs/TabBar",
  component: TabBar,
  argTypes: {
    tabs: { control: "" },
    defaultValue: "",
    ariaLabel: "",
    textColor: "",
    indicatorColor: "",
    orientation: "",
  },
};
const Template = (args) => <TabBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultValue: "TAB_TWO",
  textColor: "white",
  indicatorColor: "secondary",
  ariaLabel: "Aria Label",
  orientation: "horizontal",
  tabs: [
    {
      label: "TAB ONE",
      value: "TAB_ONE",
      Component: () => <Tab1 />,
    },
    {
      label: "TAB TWO",
      value: "TAB_TWO",
      Component: () => <Tab2 />,
    },
    {
      label: "TAB THREE",
      value: "TAB_THREE",
      Component: () => <Tab3 />,
    },
  ],
};
