import DatePickerComponent from "./index";

export default {
  title: "Components/Date",
  component: DatePickerComponent,
  argTypes: {},
};
const Template = (args) => <DatePickerComponent {...args} />;

export const DatePicker = Template.bind({});
DatePicker.args = {
  maxDateMessage: null,
  closeOnDaySelect: true,
  autoOk: true,
  inputFormat: "dd-mm-yyyy",
  placeholder: "MM DD YYYY",
  invalidDateMessage: "",
  margin: "normal",
  label: "Select Date",
  isReadOnly: false,
  isDisabled: false,
  helperText: "",
  locale: "en",
  description: "",
  maxDate: "",
};
