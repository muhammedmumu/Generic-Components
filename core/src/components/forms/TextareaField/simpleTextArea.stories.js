import TextFieldArea from "./simpleTextArea";

export default {
  title: "Components/Text Area",
  component: TextFieldArea,
  argTypes: {
    label: "",
    helperText: { control: "" },
    placeHolder: { control: "" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["outlined", "filled", "standard"],
      },
    },
  },
};
const Template = (args) => {
  return <TextFieldArea {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Text Area",
  variant: "outlined",
  helperText: "Enter any Text",
  placeHolder: "This is Textarea",
};
