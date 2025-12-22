import AccordionComponent from "./Accordion";

export default {
  title: "Components/Accordion",
  component: AccordionComponent,
  argTypes: {
    backgroundHeaderColor: {
      control: { type: "color" },
    },
    headerTextColor: {
      control: { type: "color" },
    },
  },
};

const Child = () => {
  return <div>Accordion is open</div>;
};

const Template = (args) => (
  <AccordionComponent {...args}>
    <Child />
  </AccordionComponent>
);

export const Accordion = Template.bind({});
Accordion.args = {};
