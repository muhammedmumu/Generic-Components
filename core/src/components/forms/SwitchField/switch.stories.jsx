import React, { useState } from "react";
import SimpleSwitchComponent from "./SimpleSwitch";

export default {
  title: "Components/Switch",
  component: SimpleSwitchComponent,
};
const Template = (args) => {
  const [valueSelected, setValueSelected] = useState([]);
  const handleChange = (event) => {
    setValueSelected(event.target.value);
  };
  return (
    <SimpleSwitchComponent
      isChecked={valueSelected}
      onChange={(v) => setValueSelected(v)}
      {...args}
    />
  );
};

export const SimpleSwitch = Template.bind({});

SimpleSwitch.args = {
  isChecked: false,
  disabled: false,
  onText: "Selected",
  offText: "Not Selected",
};
